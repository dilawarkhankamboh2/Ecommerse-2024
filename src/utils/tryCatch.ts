import { NextFunction, Request, Response } from "express";
import { ControllerType } from "../types/globalTypes.js";

export const TryCatch= (fun:ControllerType) => (req:Request, res:Response, next:NextFunction)=>{

    return Promise.resolve(fun(req, res, next)).catch(next);

}