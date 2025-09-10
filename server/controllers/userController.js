import User from "../models/User.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = createToken(user._id);
    res.json({ success: true, token });

  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};


const signupUser=async(req,res)=>{
    try {
        const {name,email,password}=req.body;

        if(!email || !password || !name){
            return res.status(400).json({success:false,message:"Invalid credentials"})
        }
        const existingUser= await User.findOne({email});
        if(existingUser){
            return res.json({success:false,message:"User already exists"})
        }
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Enter a valid email"})
        }
        if(password.length<10){
            return res.json({success:false,message:"Password should contain atleast 10 characters"})
        }
         
        const salt= await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        const newUser= new User({
            name,
            email,
            password:hashedPassword
        })
        const user= await newUser.save();
        
        const token = createToken(user._id)

        res.json({success:true,token})

    } catch (err) {
        console.log(err);
        res.json({success:false,message:err.message})
    }
}

const adminLogin=async(req,res)=>{

    try {
        const {email,password}=req.body;
        if(!email || !password){
            return res.status(400).json({success:false,message:"All fields are required"})
        }
        let token;
        if(email==process.env.ADMIN_EMAIL && password==process.env.ADMIN_PASSWORD){
            token = jwt.sign(email+password,process.env.JWT_SECRET);
            return res.json({success:true,token})
        }
        else{
            return res.status(400).json({success:false,message:"Invalid admin credentials"})
        }
        res.json({success:true,token})
    } catch (error) {
        res.status(500).json({success:false,message:error.message})
    }
}

export {loginUser,signupUser,adminLogin};