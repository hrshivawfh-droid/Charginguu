// Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPModal from "./OTPModal";
import api from "./api";  // import axios instance
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user",
  });
  const [otpVisible, setOtpVisible] = useState(false);
  const [verified, setVerified] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleVerify = async () => {
    try {
      // Send OTP to email/mobile
      await api.post("/send-Otp", {
        subject: form.email,
        purpose: "signup"
      });
      setOtpVisible(true);
      alert("OTP sent to your email/mobile.");
    } catch (err) {
      console.error(err);
      alert("Failed to send OTP: " + (err.response?.data?.error || err.message));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!verified) return alert("Please verify OTP first");
    if (form.password !== form.confirmPassword)
      return alert("Passwords do not match");

    try {
      await api.post("/register", {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
      });
      alert("Signup successful!");
      form.role === "user" ? navigate("/home") : navigate("/host");
    } catch (err) {
      console.error(err);
      alert("Signup failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />
          <div className="otp-row">
            <input
              type="text"
              name="email"
              placeholder="Email / Mobile Number"
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="btn-otp"
              onClick={handleVerify}
            >
              Verify OTP
            </button>
          </div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <div className="role-row">
            <label>
              <input
                type="radio"
                name="role"
                value="user"
                checked={form.role === "user"}
                onChange={handleChange}
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="host"
                checked={form.role === "host"}
                onChange={handleChange}
              />
              Host
            </label>
          </div>

          <button type="submit" className="btn-primary">
            Register
          </button>
        </form>

        <p className="footer-text">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>
      </div>

      {otpVisible && (
        <OTPModal
          onClose={() => setOtpVisible(false)}
          onVerify={async (enteredOtp) => {
            try {
              await api.post("/verify-otp", {
                subject: form.email,
                otp: enteredOtp,
                purpose: 'signup'
              });
              alert("OTP verified!");
              setVerified(true);
              setOtpVisible(false);
            } catch (err) {
              console.error(err);
              alert("OTP verification failed: " + (err.response?.data?.error || err.message));
            }
          }}
        />
      )}
    </div>
  );
};

export default Signup;
