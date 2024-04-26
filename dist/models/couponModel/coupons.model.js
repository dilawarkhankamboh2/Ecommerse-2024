import mongoose from "mongoose";
// coupon schema
const couponSchema = new mongoose.Schema({
    coupon: { type: String, required: true },
    amount: { type: Number, required: true }
});
// coupon model
export const Coupon = mongoose.model("Coupon", couponSchema);
