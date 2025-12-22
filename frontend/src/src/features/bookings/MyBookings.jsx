import "../profile/ProfileSection.css";

const MyBookings = ({ goBack }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <span onClick={goBack}>←</span>
        <h3>My Bookings</h3>
      </div>
      <div className="section-content">
        <p>No bookings yet.</p>
        {/* You can later map real booking cards here */}
      </div>
    </div>
  );
};

export default MyBookings;
/*import { useNavigate } from "react-router-dom";
import "./Bookings.css";

const MyBookings = () => {
  const navigate = useNavigate();

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <span onClick={() => navigate("/profile")}>←</span>
        <h3>My Bookings</h3>
      </div>

      <div className="booking-card">
        <h4>Charging Station A</h4>
        <p>Date: 12 Aug 2025</p>
        <p>Time: 10:00 AM – 11:00 AM</p>
        <span className="status success">Completed</span>
      </div>

      <div className="booking-card">
        <h4>Charging Station B</h4>
        <p>Date: 18 Aug 2025</p>
        <p>Time: 3:00 PM – 4:00 PM</p>
        <span className="status pending">Upcoming</span>
      </div>
    </div>
  );
};

export default MyBookings;*/