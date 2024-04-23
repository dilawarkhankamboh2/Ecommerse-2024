import express from "express";
import createHttpError, { HttpError } from "http-errors";
import { Errorhandler } from "./middlewares/errorHandler.js";
export const app = express();

// api routes
app.get("/api/test", (req, res, next)=>{

    const error= createHttpError(400, "All fields are required");
    throw error;
    res.json({message: "all api working "})
})


// global error handler middleware
app.use(Errorhandler)