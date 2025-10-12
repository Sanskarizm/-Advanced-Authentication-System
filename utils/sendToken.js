export const sendToken = async (user, statuscode, message, res)=>{
    const token = await user.generateToken()
    res.status(statuscode).cookie("token", token, {
        expires: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
        httpOnly: true,
    }).json({
        success: true,
        message,
        user,
        token
    })
}

