import { User } from "../models/userModel.js";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken"

export const isAuthenticated = catchAsyncError(async function (req, res, next) {
    const { token } = req.cookies;

    if (!token) {
        next(new ErrorHandler("User is not autheticated"), 400);
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
console.log(decoded);
    req.user = await User.findById(decoded.id); 
    console.log(req.user);
    next()
})