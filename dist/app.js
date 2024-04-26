import express from "express";
import { Errorhandler } from "./middlewares/errorHandler.js";
import { allApiRoutes } from "./routes/index.routes.js";
import cookieParser from "cookie-parser";
import NodeCache from "node-cache";
export const app = express();
// node cache
export const myCacth = new NodeCache();
// middleware
app.use(express.json());
app.use(cookieParser());
// all api routes
allApiRoutes(app);
// global error handler middleware
app.use(Errorhandler);
