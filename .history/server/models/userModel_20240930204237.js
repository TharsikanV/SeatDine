const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
// const crypto=require('crypto');

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
        // maxlength:[6,'password connot exceed 6 characters'],
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
    },
    {
        timestamps:true
    }
)

userSchema.pre('save',async function(next){

    if(!this.isModified('password')) return next();
    
    this.password=await bcrypt.hash(this.password,10);
})

userSchema.methods.getJwtToken = async function(){
    return jwt.sign({id:this.id,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRES_IN  
    }})
}

userSchema.methods.comparePassword=async function(candidatePassword){

    return await bcrypt.compare(candidatePassword,this.password);
}



const UserModel=mongoose.model('User',userSchema)

module.exports=UserModel