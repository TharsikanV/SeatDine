const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const crypto=require('crypto');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please enter name']
    },
    email:{
        type:String,
        required:[true,'Please enter email'],
        unique:true,
        validate:[validator.isEmail,'Please enter valid email address']
    },
    password:{
        type:String,
        required:[true,'Please enter password'],
        maxlength:[6,'password connot exceed 6 characters'],
        select:false//oru user ta data ah edukkum pothu password field irukkaathu
    },
    avatar:{
        type:String
    },
    role:{
        type:String,
        default:'user'
    },
    resetPasswordToken:String,
    resetPasswordTokenExpire:Date,
    }
)