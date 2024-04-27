import mongoose from "mongoose";
import { User } from "../../types/userTypes.js";

const authSchema = new mongoose.Schema<User>({

  _id: {type:String, required:true},

  name: { type: String, required: true},

  avator:{type:String, required:true}, 
  
  email: { type: String, required: true, unique: true},

  password: { type:String, required:true},

  dob: {type: Date, required:true},

  role: {type:String, required:true, default: "user"}

});

// auth model
export const Auth = mongoose.model<User>("Auth", authSchema);