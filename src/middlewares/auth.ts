import createHttpError from "http-errors";
import { TryCatch } from "../utils/tryCatch.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import { Auth } from "../models/authModel/auth.model.js";
import { Request } from "express";

export interface AuthType { userId:string}

export const auth = TryCatch(async(req:Request<{},{},AuthType>, res,next)=>{

    const token= req.cookies.token;

    if(!token) return next(createHttpError(401, "Unauthorized user please login"));

    const verifyToken= jwt.verify(token, config.JWT_KEY!)

    req.body.userId = verifyToken as string;
    next()
})