import Subscribe from '../models/Subscribe.js';
import validator from 'validator';

// signup use
const newsubscribe=async(req,res)=>{
    try {
        const {email}=req.body;
        if(!email){
            return res.status(400).json({success:false,message:"Email is required"});
        }
        const existing=await Subscribe.findOne({email});
        if(existing){
            return res.status(400).json({success:false,message:"Email already subscribed"});
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter a valid email"})
        }
        const newSubscribe= new Subscribe({email});
        await newSubscribe.save();
        return res.status(201).json({success:true,message:"Subscribed successfully"});
    } catch (error) {
        return res.status(500).json({success:false,message:"Internal server error"});
    }
}

export {newsubscribe};