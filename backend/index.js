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

// Ensure "uploads" directory exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
  console.log("Uploads directory created");
} else {
  console.log("Uploads directory already exists");
}

// Middleware for serving static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// CORS configuration
app.use(
  cors({
    origin: "https://inquisitive-griffin-758efb.netlify.app", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Only if you're sending cookies
  })
);

// Explicitly handle OPTIONS requests for preflight CORS checks
app.options("*", cors());

// Middleware for parsing requests
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

// API routes
app.use("/api/auth", authRoutes);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

// Error-handling middleware
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