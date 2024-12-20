// import React from 'react'

// function SignIn() {
//   return (
//     <div>SignIn</div>
//   )
// }

// export default SignIn







import React, { useState } from "react";
import Login from "../auth/Login";
import VerifyOtp from "../auth/VerifyOtp";

const SignIn = () => {
  const [phone, setPhone] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  return (
    <div>
      {!isOtpSent ? (
        <Login setPhone={setPhone} setIsOtpSent={setIsOtpSent} />
      ) : (
        <VerifyOtp phone={phone} />
      )}
    </div>
  );
};

export default SignIn;
