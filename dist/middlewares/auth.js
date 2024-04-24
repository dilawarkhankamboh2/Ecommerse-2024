import createHttpError from "http-errors";
import { TryCatch } from "../utils/tryCatch.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
export const auth = TryCatch(async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return next(createHttpError(401, "Unauthorized user"));
    }
    const parseToken = token.split(" ")[1];
    const verifyToken = jwt.verify(parseToken, config.JWT_KEY);
    const _req = req;
    _req.userId = verifyToken.sub;
    next();
});
