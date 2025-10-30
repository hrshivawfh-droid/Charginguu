import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "./api";        // assuming you created an axios instance
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState("");   // email or mobile
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", {
        login: loginField,
        password
      });
      // assuming backend returns user info + tokens
      const { user } = res.data;
      // store tokens if needed: e.g. localStorage.setItem("accessToken", tokens.accessToken);
      // Redirect based on role or some property
      if (user && user.role === "host") {
        navigate("/host");
      } else {
        navigate("/home");
      }
    } catch (err) {
      console.error("Login error:", err);
      const msg = err.response?.data?.error || "Login failed";
      setError(msg);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome!</h2>

        {error && <div className="error">{error}</div>}

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email / Mobile Number"
            value={loginField}
            onChange={(e) => setLoginField(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Link to="/forgot-password" className="forgot-link">
            Forgot Password?
          </Link>

          <button type="submit" className="btn-primary">
            Login
          </button>
        </form>

        <div className="divider">OR</div>

        {/* Google & Apple login buttons (you'll need to integrate OAuth separately) */}
        <button className="btn-google">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="icon"
          />
          Continue with Google
        </button>

        <button className="btn-apple">
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
  );
};

export default Login;
