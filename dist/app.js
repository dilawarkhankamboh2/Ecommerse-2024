import express from "express";
import { DatabaseConnection } from "./database/connection.js";
export const app = express();
// database connection
DatabaseConnection();
