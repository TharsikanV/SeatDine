const User=require('../models/userModel');
const bcrypt=require('bcrypt');
const catchAsyncError=require('../middlewares/catchAsyncError')l


// User registration route -/api/v1/register
const registerUser=async(req,res)=>{
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

        res.status(200).json({msg: 'User registered successfully'});

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports =registerUser;