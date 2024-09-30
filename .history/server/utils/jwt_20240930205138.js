const  sendToken=(user,statusCode,res)=>{

    const token=user.getJwtToken();
    res.status(statusCode)
    .cok
    .json({
        success:true,
        token,
        user:user
    });
}