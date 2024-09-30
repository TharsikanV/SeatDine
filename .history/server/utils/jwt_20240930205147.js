const  sendToken=(user,statusCode,res)=>{

    const token=user.getJwtToken();
    res.status(statusCode)
    .cookie('tk'
    .json({
        success:true,
        token,
        user:user
    });
}