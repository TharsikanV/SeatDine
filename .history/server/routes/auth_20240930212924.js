const {registerUser}=require('../controllers/authController');
const express=require('express');
const router=express.Router();

//register user

router.post('/register', registerUser);

router.get('/login',);

module.exports=router;