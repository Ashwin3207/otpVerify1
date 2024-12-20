

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const VerifyOtp = ({ phone }) => {
//   const [otp, setOtp] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const verifyOtp = async () => {
//     setIsLoading(true);
//     try {
//       const response = await axios.post("http://localhost:8000/api/users/verify", {
//         phone,
//         otp,
//       });

//       const { isRegistered } = response.data;

//       if (isRegistered) {
//         alert("Login successful! Redirecting to home page.");
//         navigate("/home");
//       } else {
//         alert("OTP verified! Redirecting to registration page.");
//         navigate("/register");
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || "Invalid OTP");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="loginPage flex min-h-screen items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
//           Sign Up
//         </h2>

//         <>
//           <div className="mb-4">
//             <label
//               htmlFor="otp"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Enter OTP
//             </label>
//             <input
//               type="text"
//               id="otp"
//               placeholder="Enter the OTP sent to your phone"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//               className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
//             />
//           </div>
//           <button
//             onClick={verifyOtp}
//             disabled={isLoading}
//             className="w-full px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none"
//           >
//             {isLoading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </>
//       </div>
//     </div>
//   );
// };

// export default VerifyOtp;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const VerifyOtp = ({ phone }) => {
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false); // State for resend OTP
  const navigate = useNavigate();

  const verifyOtp = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("https://breadandbetter-7e5i.vercel.app/api/users/verify", {
        phone,
        otp,
      });

      const { isRegistered } = response.data;

      if (isRegistered) {
        alert("Login successful! Redirecting to home page.");
        navigate("/home");
      } else {
        alert("OTP verified! Redirecting to registration page.");
        navigate("/register");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Invalid OTP");
    } finally {
      setIsLoading(false);
    }
  };

  const resendOtp = async () => {
    setIsResending(true);
    try {
      await axios.post("http://localhost:8000/api/users/resend-otp", { phone });
      alert("A new OTP has been sent to your phone.");
    } catch (error) {
      alert(error.response?.data?.message || "Error resending OTP");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-pink-500 to-orange-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Welcome Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Verify OTP
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter the OTP sent to your phone number <br /> <strong>{phone}</strong>
        </p>

        {/* Input Section */}
        <div className="mb-4">
          <label
            htmlFor="otp"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter OTP
          </label>
          <input
            type="text"
            id="otp"
            placeholder="Enter the OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 text-gray-800"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={verifyOtp}
          disabled={isLoading}
          className={`w-full flex items-center justify-center px-4 py-2 text-white font-semibold rounded-lg shadow-md focus:outline-none ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {isLoading ? "Verifying..." : "Verify OTP"}
        </button>

        {/* Resend OTP Section */}
        <p className="text-xs text-center text-gray-500 mt-6">
          Didn't receive the OTP?{" "}
          <button
            onClick={resendOtp}
            disabled={isResending}
            className="text-orange-500 underline cursor-pointer"
          >
            {isResending ? "Resending..." : "Resend OTP"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;

