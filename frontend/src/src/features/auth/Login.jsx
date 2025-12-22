import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to ChargingU</h2>

        <input type="text" placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />

        <button onClick={() => navigate("/home")}>Login</button>

        <div className="auth-links">
          <p onClick={() => navigate("/forgot-password")}>
            Forgot Password?
          </p>
          <p>
            Don’t have an account?{" "}
            <span onClick={() => navigate("/signup")}>Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

/*import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <form className="auth-card" autoComplete="off" onSubmit={handleLogin}>
        <h2>ChargingU</h2>

        <input
          type="email"
          name="email"
          placeholder="Email or Phone"
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <Link to="/forgot-password" className="link">
          Forgot Password?
        </Link>

        <p>
          Don’t have an account?{" "}
          <Link to="/signup" className="link">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}*/