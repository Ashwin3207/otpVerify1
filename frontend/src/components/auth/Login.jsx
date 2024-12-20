import React, { useState } from "react";
import axios from "axios";

const Login = ({ setPhone, setIsOtpSent }) => {
  const [phone, setLocalPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendOtp = async () => {
    // Validate phone number (ensure it's 10 digits)
    if (phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsLoading(true);
    try {
      // Make POST request to send OTP
      await axios.post(
        "https://otp-verify1-83s8.vercel.app/api/users/login",
        { phone },
        { withCredentials: true } // Ensure cookies are included (if needed)
      );
      setPhone(phone);
      setIsOtpSent(true);
    } catch (error) {
      alert(error.response?.data?.message || "Error sending OTP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Welcome Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Welcome</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please enter your phone number to receive an OTP
        </p>

        {/* Input Section */}
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="Enter your 10-digit phone number"
            value={phone}
            onChange={(e) => setLocalPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-800"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={sendOtp}
          disabled={isLoading}
          className={`w-full flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg shadow-md focus:outline-none ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {isLoading ? "Sending OTP..." : "Send OTP"}
        </button>

        {/* Terms and Conditions */}
        <p className="text-xs text-center text-gray-500 mt-6">
          By pressing "Send OTP" you agree to our{" "}
          <span className="text-orange-500 underline">terms & conditions</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
