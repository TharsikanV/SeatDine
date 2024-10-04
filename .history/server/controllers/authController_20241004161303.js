const User=require('../models/userModel');
const bcrypt=require('bcrypt');
const catchAsyncError=require('../middlewares/catchAsyncError');
const sendToken = require('../utils/jwt');
const ErrorHandler = require('../utils/errorHandler');


// User registration route -/api/v1/register
const registerUser=catchAsyncError(async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        // Check for existing user
        const user=await User.findOne({email});
        if(user) return res.status(400).json({msg: 'User already exists'});

        // Create a new user
        const newUser=new User({name,email,password});

        // Hash the password
        const salt=await bcrypt.genSalt(10);
        newUser.password=await bcrypt.hash(password,salt);

        // Save the user
        await newUser.save();

       sendToken(newUser,200,res)

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// User login route -/api/v1/login

const loginUser=catchAsyncError(async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return next(new ErrorHandler('Please enter email & password',400));
        }

        // Check for existing user
        const user=await User.findOne({email}).select('+password');
        if(!user){
            return next(new ErrorHandler('Invalid email or password',400))
        }

        // Check if password matches
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return next(new ErrorHandler('Invalid email or password',400))
        }
        sendToken(user,200,res)

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// User logout route -/api/v1/logout

const logoutUser=catchAsyncError(async (req,res,next)=>)




module.exports ={
    registerUser,
    loginUser
};