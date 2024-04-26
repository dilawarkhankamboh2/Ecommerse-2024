import mongoose from "mongoose";
import { OrderTypes } from "../../types/ordersTypes.js";

const ordersSchema= new mongoose.Schema<OrderTypes>({

shippingInfo:[{
    address:{type:String, required:true},
    city:{type:String, required:true},
    state:{type:String, required:true},
    country:{type:String, required:true},
    pinCode: {type:Number, required:true}
}],

ordersItems:[{
    name: {type:String, required:true},
    photo:{type:String, required:true},
    price:{type:Number, required:true},
    quantity: {type:Number, required:true},
    productId:{type:String, required:true}
}],

user: {type:String, ref: "Auth", required:true},
subTotal:{type:Number, required:true},
tax:{type:Number, required:true},
shippingCharges:{type:Number, required:true},
discount:{type:Number, required:true},
total:{type:Number, required:true},
status:{type:String, enum:["Processing", "Shipped", "Delivered"],default: "Processing"},

},{timestamps:true})

export const Order= mongoose.model<OrderTypes>("Order", ordersSchema);