import { useNavigate } from "react-router-dom";

export default function ProfileMenu({ close }) {
  const nav = useNavigate();

  return (
    <div className="profile-menu">
      <p>📷 Upload Photo</p>
      <p onClick={() => nav("/bookings")}>📅 My Bookings</p>
      <p>❤️ Favorite Cards</p>
      <p onClick={() => nav("/preferences")}>⚙️ Preferences</p>
      <p onClick={() => nav("/")}>🚪 Logout</p>
      <button onClick={close}>Close</button>
    </div>
  );
}