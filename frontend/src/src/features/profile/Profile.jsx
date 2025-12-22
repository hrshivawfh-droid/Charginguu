import { useNavigate } from "react-router-dom";
import "./Profile.css";

const menuItems = [
  { title: "My Bookings", icon: "📅", path: "my-bookings" },
  { title: "Charging History", icon: "⚡", path: "charging-history" },
  { title: "Favourite Cards", icon: "❤️", path: "favourite-cards" },
  { title: "Payment Methods", icon: "💳", path: "payment-methods" },
  { title: "Preferences", icon: "⚙️", path: "preferences" },
  { title: "Invite Friends", icon: "👥", path: "invite-friends" },
  { title: "Help & Support", icon: "🛟", path: "help-support" },
];

const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );
    if (confirmLogout) {
      navigate("/login");
    }
  };

  return (
    <div className="profile-container">
      <h2 className="profile-title">Profile</h2>

      <div className="profile-card">
        <div className="avatar">👤</div>
        <h3>Sushma</h3>
        <p>sushma@gmail.com</p>
        <button
          className="edit-btn"
          onClick={() => navigate("/profile/edit")}
        >
          Edit Profile
        </button>
      </div>

      <div className="profile-menu">
        {menuItems.map((item) => (
          <div
            key={item.path}
            className="menu-item"
            onClick={() => navigate(`/profile/${item.path}`)}
          >
            <span>{item.icon}</span>
            <span className="menu-text">{item.title}</span>
            <span className="arrow">›</span>
          </div>
        ))}

        <div className="menu-item logout" onClick={handleLogout}>
          <span>🚪</span>
          <span className="menu-text">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;