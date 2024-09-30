const  sendToken=(user,statusCode,res)=>{

    const token=user.getJwtToken();
    res.status(statusCode)
    .getJwtToken.json({
        success:true,
        token,
        user:user
    });
}