import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js"; // Ensure this file exists and is correctly implemented

dotenv.config();

const app = express();

// Set up the database URL from the environment variable
const dbUrl = process.env.ATLASDB_URL;

// Connect to the database
async function main() {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (err) {
    console.error("Database connection error:", err);
    process.exit(1); // Exit process with failure
  }
}

main();

// Middleware
app.use(cors({
  origin: 'https://otp-verify1.vercel.app', // Allow your frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true, // Enable credentials (cookies or headers)
}));
app.options('*', cors()); // Handle preflight requests

app.use(bodyParser.json()); // Parse incoming JSON payloads

// Debugging middleware to log incoming requests
app.use((req, res, next) => {
  console.log('Request Origin:', req.headers.origin);
  console.log('Request Method:', req.method);
  console.log('Request Path:', req.path);
  console.log('Request Headers:', req.headers);
  next();
});

// Routes
app.use("/api/users", userRoutes); // Ensure userRoutes is properly set up

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
