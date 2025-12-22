import { useState, useRef } from "react";
import "./ProfileDrawer.css";

const MENU_ITEMS = [
  { key: "bookings", label: "My Bookings", icon: "📅" },
  { key: "history", label: "Charging History", icon: "⚡" },
  { key: "favourites", label: "Favourite Cards", icon: "❤️" },
  { key: "payments", label: "Payment Methods", icon: "💳" },
  { key: "preferences", label: "Preferences", icon: "⚙️" },
  { key: "invite", label: "Invite Friends", icon: "👥" },
  { key: "support", label: "Help & Support", icon: "🛟" },
  { key: "logout", label: "Logout", icon: "🚪" },
];

export default function ProfileDrawer({ open, onClose }) {
  const [screen, setScreen] = useState("profile");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const [profileImage, setProfileImage] = useState(null);
  const fileRef = useRef();

  const [form, setForm] = useState({
    name: "Sushma",
    email: "sushma@gmail.com",
    password: "",
    gender: "",
    age: "",
  });

  if (!open) return null;

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleMenuClick = (key) => {
    if (key === "logout") {
      setShowLogoutConfirm(true);
    } else {
      setScreen(key);
    }
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    onClose(); // logout simulation
  };

  return (
    <>
      <div className="profile-overlay">
        <div className="profile-drawer">
          {/* HEADER */}
          <div className="profile-header">
            {screen !== "profile" ? (
              <span className="back-btn" onClick={() => setScreen("profile")}>
                ←
              </span>
            ) : (
              <span />
            )}

            <h3>
              {screen === "profile"
                ? "Profile"
                : screen === "edit"
                ? "Edit Profile"
                : MENU_ITEMS.find((m) => m.key === screen)?.label}
            </h3>

            <span className="close-btn" onClick={onClose}>
              ✕
            </span>
          </div>

          {/* ================= PROFILE ================= */}
          {screen === "profile" && (
            <>
              <div
                className="profile-photo"
                onClick={() => fileRef.current.click()}
              >
                {profileImage ? (
                  <img src={profileImage} alt="profile" />
                ) : (
                  <div className="photo-placeholder">
                    📷
                    <span>Upload Photo</span>
                  </div>
                )}
                <input
                  type="file"
                  hidden
                  ref={fileRef}
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <h4>{form.name}</h4>
              <p className="email">{form.email}</p>

              <button className="edit-btn" onClick={() => setScreen("edit")}>
                Edit Profile
              </button>

              <div className="profile-menu">
                {MENU_ITEMS.map((item) => (
                  <div
                    key={item.key}
                    className="menu-card"
                    onClick={() => handleMenuClick(item.key)}
                  >
                    <div className="menu-left">
                      <span className="menu-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                    <span className="arrow">›</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* ================= EDIT PROFILE ================= */}
          {screen === "edit" && (
            <div className="edit-form">
              <input
                name="name"
                placeholder="Full Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={form.age}
                onChange={handleChange}
              />

              <button className="save-btn" onClick={() => setScreen("profile")}>
                Save
              </button>
            </div>
          )}

          {/* ================= OTHER SCREENS ================= */}
          {screen !== "profile" && screen !== "edit" && (
            <div className="content-screen">
              <p>
                <b>{MENU_ITEMS.find((m) => m.key === screen)?.label}</b>
              </p>
              <p>This is demo frontend content.</p>
            </div>
          )}
        </div>
      </div>

      {/* ================= LOGOUT CONFIRM MODAL ================= */}
      {showLogoutConfirm && (
        <div className="logout-overlay">
          <div className="logout-box">
            <p>Are you sure you want to logout?</p>
            <div className="logout-actions">
              <button className="no-btn" onClick={() => setShowLogoutConfirm(false)}>
                No
              </button>
              <button className="yes-btn" onClick={confirmLogout}>
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}