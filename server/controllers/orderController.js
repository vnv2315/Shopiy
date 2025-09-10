import Order from "../models/Order.js";
import User from "../models/User.js";
import Stripe from 'stripe'


//gateway setup
const stripe=new Stripe(process.env.STRIPE_SECRET_KEY)

const currency='inr'
const deliveryCharges=10


// place order using COD
const placeOrder=async(req,res)=>{
    try {
        const {userId,items,amount,address}=req.body;
        const newOrder=new Order({
            userId,
            items,
            amount,
            address,
            paymentMethod:"COD",
            payment:false,
            date:Date.now(),
        });
        await newOrder.save();
        await User.findByIdAndUpdate(userId,{cartItems:[]});
        res.json({success:true,message:"Order placed successfully"})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}
// place order using stripe payment
const placeOrderStripe=async(req,res)=>{
    try {
        const {userId,items,amount,address}=req.body;
        const {origin}=req.headers;
        const newOrder=new Order({
            userId,
            items,
            amount,
            address,
            paymentMethod:"Stripe",
            payment:true,
            date:Date.now(),
        });
        await newOrder.save();
        const line_items=items.map((item)=>({
            price_data:{
                currency:currency,
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:currency,
                product_data:{
                    name:"Delivery charges"
                },
                unit_amount:deliveryCharges*100
            },
            quantity:1
        })
        const session=await stripe.checkout.sessions.create({
            success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode:'payment',
        })
        res.json({success:true,session_url:session.url})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//verify stripe
const verifyStripe=async(req,res)=>{
    const {orderId,success,userId}= req.body;

    try {
        console.log("Verifying payment:", {orderId, success, userId});
        
        if(success==="true"){
            await Order.findByIdAndUpdate(orderId, {payment:true});
            await User.findByIdAndUpdate(userId,{cartItems:[]})
            console.log("Payment verified successfully, cart cleared");
            res.json({success:true, message: "Payment verified successfully"});
        }
        else{
            await Order.findByIdAndDelete(orderId)
            console.log("Payment failed, order deleted");
            res.json({success:false, message: "Payment failed"})
        }
    } catch (error) {
        console.log("Error in verifyStripe:", error)
        res.status(500).json({success:false,message:error.message})
    }
}

// admin orders 
const allOrders=async(req,res)=>{
    try {
        const orders=await Order.find({});
        res.json({success:true,orders})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}
const updateStatus=async(req,res)=>{
    try {
        const {orderId,status}=req.body;
        await Order.findByIdAndUpdate(orderId,{status});
        res.json({success:true,message:"Status updated successfully"})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}


// user orders
const userOrders=async(req,res)=>{
    try {
        const {userId}=req.body;
        if(!userId){
            return res.json({success:false,message:"UserId is required"})
        }
        const orders=await Order.find({userId})
        res.json({success:true,orders})
    } catch (error) {
        return res.status(500).json({success:false,message:error.message})
    }
}


export {placeOrder,placeOrderStripe,allOrders,userOrders,updateStatus,verifyStripe};