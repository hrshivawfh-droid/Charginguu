import { useState } from "react";
import EditProfile from "./EditProfile";
import MyBookings from "../bookings/MyBookings";
import ChargingHistory from "../bookings/ChargingHistory";
import SavedCards from "../payments/SavedCards";
import PaymentMethods from "../payments/PaymentMethods";
import Preferences from "../preferences/Preferences";
import InviteFriends from "../invite/InviteFriends";
import HelpSupport from "../help/HelpSupport";
import "./Profile.css";

const ProfileView = ({ onClose }) => {
  const [screen, setScreen] = useState("main");

  const back = () => setScreen("main");

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      onClose();
    }
  };

  return (
    <div className="profile-root">

      {screen === "main" && (
        <>
          <div className="profile-header">
            <h3>Profile</h3>
            <span onClick={onClose}>✕</span>
          </div>

          <div className="profile-user">
            <img src="https://i.pravatar.cc/150" alt="user" />
            <h4>Sushma</h4>
            <button onClick={() => setScreen("edit")}>Edit Profile</button>
          </div>

          <div className="profile-menu">
            <p onClick={() => setScreen("bookings")}>My Bookings</p>
            <p onClick={() => setScreen("history")}>Charging History</p>
            <p onClick={() => setScreen("cards")}>Favourite Cards</p>
            <p onClick={() => setScreen("payments")}>Payment Methods</p>
            <p onClick={() => setScreen("prefs")}>Preferences</p>
            <p onClick={() => setScreen("invite")}>Invite Friends</p>
            <p onClick={() => setScreen("help")}>Help & Support</p>
            <p className="logout" onClick={handleLogout}>Logout</p>
          </div>
        </>
      )}

      {screen === "edit" && <EditProfile goBack={back} />}
      {screen === "bookings" && <MyBookings goBack={back} />}
      {screen === "history" && <ChargingHistory goBack={back} />}
      {screen === "cards" && <SavedCards goBack={back} />}
      {screen === "payments" && <PaymentMethods goBack={back} />}
      {screen === "prefs" && <Preferences goBack={back} />}
      {screen === "invite" && <InviteFriends goBack={back} />}
      {screen === "help" && <HelpSupport goBack={back} />}
    </div>
  );
};

export default ProfileView;