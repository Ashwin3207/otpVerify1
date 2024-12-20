import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Set up the database URL from environment variable
const dbUrl = process.env.ATLASDB_URL;

// Connect to the database
main()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}



// Middleware
app.use(cors({
  origin: 'https://otp-verify1.vercel.app', // Specify allowed origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true // If you're using cookies
}));
app.use(bodyParser.json());
app.use("/api/users", userRoutes); // Your user routes for login and OTP

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});
