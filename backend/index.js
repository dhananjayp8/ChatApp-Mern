import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";

dotenv.config({});
connectDb();
const app = express();

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
