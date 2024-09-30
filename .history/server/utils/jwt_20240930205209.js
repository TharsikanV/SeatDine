const  sendToken=(user,statusCode,res)=>{

    const token=user.getJwtToken();
    res.status(statusCode)
    .cookie('token',token,{
        exp
    })
    .json({
        success:true,
        token,
        user:user
    });
}