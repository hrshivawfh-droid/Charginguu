import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import api from "./api";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [newPass, setNewPass] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [loading, setLoading] = useState(false);

  // Backend URL (change if needed)
  //const BASE_URL = "http://localhost:5000/api/auth";

  // ✅ Step 1: Send OTP
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/send-Otp", {
        subject: email,
        purpose: "password_reset",
      });
      if (res.data.ok) {
        alert("OTP sent successfully to your email or phone!");
        setOtpSent(true);
      } else {
        alert("Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/verify-Otp", {
        subject: email,
        otp: otp,
        purpose: "password_reset",
      });

      if (res.data.ok && res.data.resetToken) {
        setResetToken(res.data.resetToken);
        alert("OTP verified successfully! Now set your new password.");
      } else {
        alert("Invalid or expired OTP");
      }
    } catch (err) {
      console.error(err);
      alert("Error verifying OTP");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/reset-password", {
        resetToken,
        newPassword: newPass,
      });

      if (res.data.ok) {
        alert("Password reset successful!");
        navigate("/login");
      } else {
        alert("Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      alert("Error resetting password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>

        {/* Step 1: Send OTP */}
        {!otpSent && (
          <form onSubmit={handleSendOtp}>
            <input
              type="text"
              placeholder="Enter Email or Mobile"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* Step 2: Verify OTP */}
        {otpSent && !resetToken && (
          <form onSubmit={handleVerifyOtp}>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </form>
        )}

        {/* Step 3: Reset Password */}
        {resetToken && (
          <form onSubmit={handleResetPassword}>
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              required
            />
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
