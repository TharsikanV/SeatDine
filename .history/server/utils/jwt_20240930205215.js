const  sendToken=(user,statusCode,res)=>{

    const token=user.getJwtToken();
    res.status(statusCode)
    .cookie('token',token,{
        expires
    })
    .json({
        success:true,
        token,
        user:user
    });
}