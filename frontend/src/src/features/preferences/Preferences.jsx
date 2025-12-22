import "../profile/ProfileSection.css";

const Preferences = ({ goBack }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <span onClick={goBack}>←</span>
        <h3>Preferences</h3>
      </div>
      <div className="section-content">
        <p>No preferences set.</p>
        {/* Later, add toggles, checkboxes etc. */}
      </div>
    </div>
  );
};

export default Preferences;
/*import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Preferences.css";

const Preferences = () => {
  const navigate = useNavigate();

  const [notifications, setNotifications] = useState(true);
  const [autoPay, setAutoPay] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="prefs-container">
      <div className="prefs-header">
        <span onClick={() => navigate("/profile")}>←</span>
        <h3>Preferences</h3>
      </div>

      <div className="prefs-item">
        <label>Notifications</label>
        <input
          type="checkbox"
          checked={notifications}
          onChange={() => setNotifications(!notifications)}
        />
      </div>

      <div className="prefs-item">
        <label>Auto-Pay</label>
        <input
          type="checkbox"
          checked={autoPay}
          onChange={() => setAutoPay(!autoPay)}
        />
      </div>

      <div className="prefs-item">
        <label>Dark Mode</label>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>
    </div>
  );
};

export default Preferences;*/