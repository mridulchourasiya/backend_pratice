import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: DB_NAME, // Specify the database name separately
    });

    console.log(
      `\n MONGODB connected !! DB HOST:  ${connectionInstance.connection.host} `
    );
  } catch (error) {
    console.log("MONGODB connection Error ", error);
    process.exit(1);
  }
};

export default connectDB;
