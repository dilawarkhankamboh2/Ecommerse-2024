import mongoose from "mongoose";

export const DatabaseConnection = async () => {

  try {

    const connect = await mongoose.connect(

      "mongodb://127.0.0.1:27017/JobEcommerse2024"

    );

    if (connect) console.log("Database Connected...");

  } catch (error) {

    console.log("Connection faild...");

    throw error;
  }
};

