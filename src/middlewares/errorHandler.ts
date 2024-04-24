import { HttpError } from "http-errors";
import { config } from "../config/config.js";
import { NextFunction, Request, Response } from "express";

export const Errorhandler= (err:HttpError, req:Request, res:Response, next:NextFunction)=>{

    const statusCode= err.statusCode || 500;

    return res.status(statusCode).json({

        message: err.message,
        status: err.status,
        // stack: config.env === "development" ? err.stack : ""
    })

}