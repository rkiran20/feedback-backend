import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import feedbackRouter from "./routes/feedbackRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5173;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use("/api", feedbackRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
