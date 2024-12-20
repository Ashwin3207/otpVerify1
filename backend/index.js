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
app.use(
  cors({
    origin: '*', // Allow all origins (for testing purposes)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Include OPTIONS method for preflight requests
    credentials: true, // Allow credentials (cookies)
  })
);

app.options('*', cors());

app.use(bodyParser.json());
app.use("/api/users", userRoutes); // Your user routes for login and OTP

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {

  console.log(`Server running on port ${PORT}`);
});
