import mongoose from "mongoose";
import { ProductsTypes } from "../../types/productsTypes.js";

// products schema
const productSchema= new mongoose.Schema<ProductsTypes>({

    name:{type:String, required:true},

    images:[{image:{type:String,required:true}}],

    price: {type:Number, required:true},

    stock: {type:Number, required:true, default:1},

    category: {type:String, required:true},

    rating:{type:Number, default:0, required:true},

    numOfReviews:{type:Number, required:true, default:0},

    reviews:[{
        name:{type:String, required:true},
        rating: {type:Number, required:true},
        comment: {type:String, required:true}
    }]

},{timestamps:true});

export const Product = mongoose.model<ProductsTypes>("Product", productSchema);