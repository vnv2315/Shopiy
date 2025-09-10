import Product from "../models/Product.js";
import { v2 as cloudinary } from 'cloudinary';

// add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    const image1 = req.files.image1?.[0];
    const image2 = req.files.image2?.[0];
    const image3 = req.files.image3?.[0];
    const image4 = req.files.image4?.[0];

    const images=[image1, image2, image3, image4].filter((item)=>item!==undefined);

    let imageUrl=await Promise.all(
      images.map(async(item)=>{
        let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
        return result.secure_url;
    }));

    const productData= new Product({
        name,
        description,
        price:Number(price),
        image:imageUrl,
        category,
        subCategory,
        sizes:JSON.parse(sizes),
        bestSeller:bestseller==="true"?true:false,
        date:Date.now()
    });
    const product=await productData.save();
    console.log(product);

    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};


// list product
const listProduct=async(req,res)=>{
    try {
        
        const products= await Product.find({});
        res.json({success:true,products})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// remove product
const removeProduct=async(req,res)=>{
    const {id}=req.body;
    try {
        if(!id){
            return res.json({success:false,message:"Product id is required"})
        }
        await Product.findByIdAndDelete(id);
        res.json({success:true,message:"Product removed successfully"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// single product info
const singleProduct=async(req,res)=>{
    try {
        const {id}=req.body;
        if(!id){
            return res.json({success:false,message:"Product id is required"})
        }
        const product= await Product.findById(id);
        if(!product){
            return res.json({success:false,message:"Product not found"})
        }
        res.json({success:true,product})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export {addProduct,listProduct,removeProduct,singleProduct};