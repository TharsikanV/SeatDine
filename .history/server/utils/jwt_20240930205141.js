const  sendToken=(user,statusCode,res)=>{

    const token=user.getJwtToken();
    res.status(statusCode)
    .cook
    .json({
        success:true,
        token,
        user:user
    });
}