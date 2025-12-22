import { useNavigate } from "react-router-dom";
import "./Auth.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>

        <input type="text" placeholder="Enter Email or Phone" />

        <button onClick={() => navigate("/login")}>
          Send Reset Link
        </button>

        <div className="auth-links">
          <span onClick={() => navigate("/login")}>Back to Login</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;