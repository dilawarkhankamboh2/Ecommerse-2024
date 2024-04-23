import express from "express";
import { DatabaseConnection } from "./database/connection.js";
const app = express();
const PORT = process.env.PORT || 8080;
// Database
DatabaseConnection();
// server listen
app.listen(PORT, () => console.log(`server listen on ${PORT}`));
