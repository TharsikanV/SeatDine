const registerUser=require('../controllers');
const express=require('express');
const router=express.Router();

//register user

router.post('/register', registerUser);

module.exports=router;