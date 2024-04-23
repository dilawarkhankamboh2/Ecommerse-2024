import { TryCatch } from "../../utils/tryCatch.js";

// register controller
 const registerController = TryCatch(async(req, res, next)=>{


    return res.json({message: "Register"})

})


export {registerController} ; 