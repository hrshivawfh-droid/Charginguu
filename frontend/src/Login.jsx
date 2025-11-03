import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy authentication simulation
    if (email === "user@test.com") navigate("/home");
    else if (email === "host@test.com") navigate("/host");
    else alert("Invalid credentials");
  };

  return (
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

        {/* Google Login Button */}
        <button className="btn-google">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Google"
            className="icon"
          />
          Continue with Google
        </button>

        {/* Apple Login Button */}
        <button className="btn-apple">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="Apple"
            className="icon"
          />
          Continue with Apple
        </button>

        <p className="footer-text">
          Don’t have an account? <Link to="/signup" className="signup-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};


export default Login;
      
