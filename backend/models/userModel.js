import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  phone: { type: String, required: true, unique: true },
  isRegistered: { type: Boolean, default: false },
  otp: { type: String },
  otpExpiresAt: { type: Date },
});

export default mongoose.model("User", userSchema);
