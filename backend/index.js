import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";
import { connectDB, connectPetDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth_routes.js";
import fs from "fs";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("Uploads directory created");
} else {
  console.log("Uploads directory already exists");
}

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173", // Local dev
      "http://localhost:3000", // Local dev
      "https://pet-care-elective-finals-8rh0n11fw.vercel.app", // Production URL
    ],
    credentials: true,
  })
);

app.options("*", cors());

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});

// Start server and connect to databases
app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log("Connected to primary database.");
    await connectPetDB();
    console.log("Connected to pet database.");
    console.log(`Server is running on port: ${PORT}`);
  } catch (error) {
    console.error(
      "Failed to start server or connect to databases:",
      error.message
    );
    process.exit(1);
  }
});
