import express from "express";
import { Errorhandler } from "./middlewares/errorHandler.js";
import { allApiRoutes } from "./routes/index.routes.js";
export const app = express();
// all api routes
allApiRoutes(app);
// global error handler middleware
app.use(Errorhandler);
