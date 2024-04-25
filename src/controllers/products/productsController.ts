import { Request } from "express";
import { TryCatch } from "../../utils/tryCatch.js";
import { ProductsTypes } from "../../types/productsTypes.js";
import createHttpError from "http-errors";
import { Product } from "../../models/productModel/products.model.js";

// create product
const createProducts= TryCatch(async(req:Request<{},{}, ProductsTypes>, res, next)=>{

    const {name, price, stock, category} = req.body;

    if(!name || !price || !stock || !category){

        return next(createHttpError(400, "All fields are required"));
    }

    // photo
    const photo= req.file;

    if(!photo){return next(createHttpError(400, "photo must be required"))}

    // create products
    await Product.create({name, price,category,stock, photo: photo.path})

    return res.status(201).json({message: "product created", success:true});
    
});

// get all products
 const allProducts= TryCatch(async(req, res, next)=>{

    const products= await Product.find({});

    return res.status(200).json(products);
})

// get single products
const singleProduct= TryCatch(async(req, res, next)=>{

    const {id} = req.params;

    if(!id) return next(createHttpError(400, "id must be required"))

    const product= await Product.findById(id);

    if(!product) return next(createHttpError(400, "product not found!"))

    return res.status(200).json(product);
})

export {createProducts, allProducts,singleProduct };