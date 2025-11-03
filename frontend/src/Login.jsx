import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ✅ Password validation function
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // ✅ Handle manual (simulated) login
  const handleLogin = (e) => {
    e.preventDefault();

    // Check password validation
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters long, contain at least one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }

    // Just simulate login — front-end only
    if (email === "user@test.com") {
      navigate("/home");
    } else if (email === "host@test.com") {
      navigate("/host");
    } else {
      alert("Invalid credentials (front-end only simulation)");
    }
  };

  // ✅ Handle Apple Login simulation
  const handleAppleLogin = () => {
    alert("Apple login successful (simulated)");
    navigate("/home");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="auth-container">
        <div className="auth-card">
          <h2>Welcome!</h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email / Mobile Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(""); // clear error when typing
              }}
              required
            />

            {/* ✅ Show password validation error */}
            {error && <p className="error-text">{error}</p>}

            <Link to="/forgot-password" className="forgot-link">
              Forgot Password?
            </Link>

            <button type="submit" className="btn-primary">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          {/* ✅ Google Login Button (simulated) */}
          <button
            className="btn-google"
            onClick={() => alert("Google Login simulated")}
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="icon"
            />
            Continue with Google
          </button>

          {/* ✅ Apple Login Button */}
          <button className="btn-apple" onClick={handleAppleLogin}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple"
              className="icon"
            />
            Continue with Apple
          </button>

          <p className="footer-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
