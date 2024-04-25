import createHttpError from "http-errors";
import { TryCatch } from "../utils/tryCatch.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
export const auth = TryCatch(async (req, res, next) => {
    const token = req.cookies.token;
    if (!token)
        return next(createHttpError(401, "Unauthorized user please login"));
    const verifyToken = jwt.verify(token, config.JWT_KEY);
    req.body.userId = verifyToken;
    next();
});
