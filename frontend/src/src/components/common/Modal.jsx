import { useNavigate } from "react-router-dom";
import "./Profile.css";

const LogoutModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Logout</h3>
        <p>Are you sure you want to logout?</p>
        <div className="modal-actions">
          <button className="btn cancel" onClick={onClose}>No</button>
          <button className="btn logout" onClick={handleLogout}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;