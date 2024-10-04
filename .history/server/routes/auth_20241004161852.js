const {
    registerUser,
    loginUser
}=require('../controllers/authController');
const express=require('express');
const router=express.Router();

//register user

router.post('/register', registerUser);

router.get('/login',loginUser);

router.get('/logout', logoutUser);

module.exports=router;