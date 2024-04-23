import express from "express";
export const app = express();
// api routes
app.get("/api/test", (req, res, next) => {
    res.json({ message: "all api working " });
});
