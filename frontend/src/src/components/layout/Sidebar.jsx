import { useNavigate } from "react-router-dom";
import "./layout/sidebar.css";

export default function Sidebar() {
  const nav = useNavigate();

  return (
    <div className="sidebar">
      <p onClick={() => nav("/profile")}>My Bookings</p>
      <p>Saved Cards & Payments</p>
      <p>Preferences</p>
      <p>Invite Friends & Earn</p>
      <p>Help & Support</p>
      <p>About ChargingU</p>
      <p className="logout">Logout</p>
    </div>
  );
}