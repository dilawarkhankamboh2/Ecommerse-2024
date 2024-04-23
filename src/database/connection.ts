import mongoose from "mongoose";
import { config } from "../config/config.js";

export const connectDB = async () => {

  try {

     mongoose.connection.on("connected", ()=> console.log("Connect to database successfully"));

     mongoose.connection.on("error", ()=> console.log("Error in connection to database"));

     await mongoose.connect(config.DATABASE_URL!);
     
  } catch (error) {

    console.log("Connection faild...");
    process.exit(1);
  }
};

