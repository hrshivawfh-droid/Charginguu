import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>

        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Email or Phone" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button onClick={() => navigate("/home")}>Sign Up</button>

        <div className="auth-links">
          <p>
            Already have an account?{" "}
            <span onClick={() => navigate("/login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;