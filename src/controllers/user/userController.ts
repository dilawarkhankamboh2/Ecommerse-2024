import { Auth } from "../../models/authModel/auth.model.js";
import { TryCatch } from "../../utils/tryCatch.js";

// get all users
const allUsers = TryCatch(async(req, res,next)=>{

    const users= await Auth.find({}).select("-password");

    return res.status(200).json({users});
})

// get single user
const singleUsr = TryCatch(async(req, res,next)=>{

    const {id} = req.query;
    const user= await Auth.findById(id).select("-password");
    return res.status(200).json({user});
})

export {allUsers, singleUsr};