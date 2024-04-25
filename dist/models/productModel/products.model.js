import mongoose from "mongoose";
// products schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 1 },
    category: { type: String, required: true }
}, { timestamps: true });
export const Product = mongoose.model("Product", productSchema);
