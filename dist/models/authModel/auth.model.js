import mongoose from "mongoose";
const authSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    avator: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dob: { type: Date, required: true },
    role: { type: String, required: true, default: "user" }
});
// auth model
export const Auth = mongoose.model("Auth", authSchema);
