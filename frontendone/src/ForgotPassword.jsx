import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPass, setNewPass] = useState("");

  const handleSendOtp = (e) => {
    e.preventDefault();
    setOtpSent(true);
  };

  const handleReset = (e) => {
    e.preventDefault();
    alert("Password reset successful!");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>

        {!otpSent ? (
          <form onSubmit={handleSendOtp}>
            <input
              type="text"
              placeholder="Enter Email or Mobile"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn-primary" type="submit">
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleReset}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              required
            />
            <button className="btn-primary" type="submit">
              Reset Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;