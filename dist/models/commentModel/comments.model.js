import mongoose from "mongoose";
// comment schema
const commentSchema = new mongoose.Schema({
    comment: { type: String },
    userId: { type: String, ref: "Auth" },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
}, { timestamps: true });
// comment model
export const Comment = mongoose.model("Comment", commentSchema);
