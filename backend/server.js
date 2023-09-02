import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import adminRoutes from "./server/Routes/adminRoutes.js";
dotenv.config();
import { notFound, errorHandler } from "./server/middleware/errorMiddleware.js";
import connectDB from "./server/connection/db.js";
const port = process.env.PORT || 5000;

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static("uploads"));
app.use("/api/admin", adminRoutes);
app.use(notFound);
app.use(errorHandler);
app.get("/", (req, res) => {
  res.send("server is ready");
});
app.listen(port, () => {
  console.log(`server started  on port ${port}`);
});
