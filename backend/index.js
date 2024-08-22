import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";

dotenv.config({});
connectDb();
const app = express();

const PORT = process.env.PORT || 8001;
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/message", messageRoute);
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
