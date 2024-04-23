import { config } from "../config/config.js";
export const Errorhandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        message: err.message,
        status: err.status,
        stack: config.env === "development" ? err.stack : ""
    });
};
