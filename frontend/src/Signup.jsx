import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPModal from "./OTPModal";
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
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ✅ Password validation function
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleVerify = () => {
    setOtpVisible(true);
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!verified) return alert("Please verify OTP first");

    if (!validatePassword(form.password)) {
      setError(
        "Password must be at least 8 characters long and include one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    form.role === "user" ? navigate("/home") : navigate("/host");
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

          {/* ✅ Email + Verify OTP in one row */}
          <div className="otp-row">
            <input
              type="text"
              name="email"
              placeholder="Email / Mobile Number"
              onChange={handleChange}
              required
            />
            <button type="button" className="btn-otp" onClick={handleVerify}>
              Verify OTP
            </button>
          </div>

          {/* ✅ Password Field with Static Eye Icon */}
          <div className="password-field">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword(!showPassword)}
              title={showPassword ? "Hide Password" : "Show Password"}
            >
              👁️
            </span>
          </div>

          {/* ✅ Confirm Password Field with Static Eye Icon */}
          <div className="password-field">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
            <span
              className="eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              title={showConfirmPassword ? "Hide Password" : "Show Password"}
            >
              👁️
            </span>
          </div>

          {/* ✅ Error message */}
          {error && <p className="error-text">{error}</p>}

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
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </div>

      {/* ✅ OTP Modal */}
      {otpVisible && (
        <OTPModal
          onClose={() => setOtpVisible(false)}
          onVerify={() => {
            setVerified(true);
            setOtpVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default Signup;
