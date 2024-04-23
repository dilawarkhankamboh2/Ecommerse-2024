import express from "express";
import createHttpError, { HttpError } from "http-errors";
import { Errorhandler } from "./middlewares/errorHandler.js";
import { allApiRoutes } from "./routes/index.routes.js";
export const app = express();


// all api routes
allApiRoutes(app);

// global error handler middleware
app.use(Errorhandler)