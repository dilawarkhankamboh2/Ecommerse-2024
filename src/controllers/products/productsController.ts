import { Request } from "express";
import { TryCatch } from "../../utils/tryCatch.js";
import { ProductsTypes } from "../../types/productsTypes.js";
import createHttpError from "http-errors";

const createProducts= TryCatch(async(req:Request<{},{}, ProductsTypes>, res, next)=>{

    const {name, price, stock, category} = req.body;

    if(!name || !price || !stock || !category){

        return next(createHttpError(400, "All fields are required"));
    }

    // photo
    const photo= req.file;

    console.log(photo)

    if(!photo){

        return next(createHttpError(400, "photo must be required"));
    }

    return res.status(200).json({success:true})
    
})

export {createProducts};