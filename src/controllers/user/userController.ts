import createHttpError from "http-errors";
import { Auth } from "../../models/authModel/auth.model.js";
import { TryCatch } from "../../utils/tryCatch.js";

// get all users
const allUsers = TryCatch(async(req, res,next)=>{

    const users= await Auth.find({}).select("-password");

    return res.status(200).json({users});
})

// get single user
const singleUser = TryCatch(async(req, res,next)=>{

    const {id} = req.params;
    const user= await Auth.findById(id).select("-password");
 
    if(!user) return next(createHttpError(400, "user not found"))

    return res.status(200).json({user});
})

// delete single user
const deleteUser = TryCatch(async(req, res,next)=>{

    const {id} = req.params;
    const user= await Auth.findById(id).select("-password");
 
    if(!user) return next(createHttpError(400, "user not found"))

    await user.deleteOne()

    return res.status(200).json({user});
})

export {allUsers, singleUser, deleteUser};