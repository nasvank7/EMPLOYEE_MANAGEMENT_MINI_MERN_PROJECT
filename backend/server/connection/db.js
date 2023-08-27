import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://127.0.0.1:27017/Employee_Management"
    );
    console.log(`MongoDB connected :${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.meassage}`);
    process.exit(1);
  }
};

export default connectDB;
