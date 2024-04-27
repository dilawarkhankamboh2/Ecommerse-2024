import mongoose from "mongoose";
// products schema
const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ image: { type: String, required: true } }],
    price: { type: Number, required: true },
    stock: { type: Number, required: true, default: 1 },
    category: { type: String, required: true },
    rating: { type: Number, default: 0, required: true },
    numOfReviews: { type: Number, required: true, default: 0 },
    reviews: [{
            name: { type: String },
            rating: { type: Number },
            comment: { type: String }
        }]
}, { timestamps: true });
export const Product = mongoose.model("Product", productSchema);
