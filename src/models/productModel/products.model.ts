import mongoose from "mongoose";
import { ProductsTypes } from "../../types/productsTypes.js";

// products schema
const productSchema= new mongoose.Schema<ProductsTypes>({

    name:{type:String, required:true},

    photo:{type:String, required:true},

    price: {type:Number, required:true},

    stock: {type:Number, required:true, default:1},

    category: {type:String, required:true}

},{timestamps:true});

export const Product = mongoose.model<ProductsTypes>("Product", productSchema);