import { Request } from "express";
import { TryCatch } from "../../utils/tryCatch.js";
import { ProductQuery, ProductsTypes, SearchQuery } from "../../types/productsTypes.js";
import createHttpError from "http-errors";
import { Product } from "../../models/productModel/products.model.js";
import { rm } from "fs";

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

// category products
 const productCategory= TryCatch(async(req, res, next)=>{

    const products= await Product.distinct("category");

    return res.status(200).json(products);
})

// latest products
 const latestProducts= TryCatch(async(req, res, next)=>{

    const products= await Product.find().sort({createdAt:-1});

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

// update single products
const updateProduct= TryCatch(async(req:Request, res, next)=>{

    const {name, price, category, stock} = req.body;
    
    const photo= req.file;

    const {id} = req.params;

    const product= await Product.findById(id);

    if (photo) {
        rm(product?.photo!, (err) => {
            if (err) {
                console.error("Error deleting file:", err);
            } else {
                console.log("File deleted successfully");
            }
        });
    }
    
    if(!product) return next(createHttpError(400, "product not found!"))

    if (photo && product) {product.photo = photo.path};
    if (name && product) {product.name = name};
    if (stock && product) {product.stock = stock};
    if (price && product) {product.price = price};
    if (category && product) {product.category = category};

    await product.save();

    return res.status(200).json({message: "product update successfully", success:true});
})

// search products
const searchProducts = TryCatch(async(req:Request<{},{},{},ProductQuery>, res, next)=>{

    const {search, price, category} = req.query;

    const BaseQuery:SearchQuery = {}

    if(search){BaseQuery.name = {$regex:search, $options:"i"}}

    if(price){BaseQuery.price = {$lte: Number(price)}}

    if(category) {BaseQuery.category= category as string}

    const products= await Product.find(BaseQuery);

    return res.status(200).json(products);

})

export {createProducts, allProducts,singleProduct, updateProduct, productCategory, latestProducts, searchProducts };