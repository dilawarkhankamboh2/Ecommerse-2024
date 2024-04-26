import mongoose from "mongoose";
const ordersSchema = new mongoose.Schema({
    shippingInfo: [{
            address: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            country: { type: String, required: true },
            pinCode: { type: Number, required: true }
        }],
    ordersItems: [{
            name: { type: String, required: true },
            photo: { type: String, required: true },
            price: { type: Number, required: true },
            qty: { type: Number, required: true },
            productId: { type: String, required: true }
        }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Auth", required: true },
    subTotal: { type: Number, required: true },
    tax: { type: Number, required: true },
    shippingCharges: { type: Number, required: true },
    discount: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: String, enum: ["Processing", "Shipped", "Delivered"], default: "Processing" },
}, { timestamps: true });
export const Order = mongoose.model("Order", ordersSchema);
