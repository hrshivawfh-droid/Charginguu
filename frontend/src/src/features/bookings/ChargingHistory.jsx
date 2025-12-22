import "../profile/ProfileSection.css";

const ChargingHistory = ({ goBack }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <span onClick={goBack}>←</span>
        <h3>Charging History</h3>
      </div>
      <div className="section-content">
        <p>No charging history available.</p>
        {/* Later, map real charging history */}
      </div>
    </div>
  );
};

export default ChargingHistory;
/*import { useNavigate } from "react-router-dom";
import "./Bookings.css";

const ChargingHistory = () => {
  const navigate = useNavigate();

  const historyData = [
    { station: "Station A", date: "10 Aug 2025", time: "9:00-10:00", status: "Completed" },
    { station: "Station B", date: "12 Aug 2025", time: "14:00-15:00", status: "Cancelled" },
    { station: "Station C", date: "15 Aug 2025", time: "18:00-19:00", status: "Completed" },
  ];

  return (
    <div className="bookings-container">
      <div className="bookings-header">
        <span onClick={() => navigate("/profile")}>←</span>
        <h3>Charging History</h3>
      </div>

      {historyData.map((item, index) => (
        <div className="booking-card" key={index}>
          <h4>{item.station}</h4>
          <p>Date: {item.date}</p>
          <p>Time: {item.time}</p>
          <span className={`status ${item.status.toLowerCase()}`}>{item.status}</span>
        </div>
      ))}
    </div>
  );
};

export default ChargingHistory;*/