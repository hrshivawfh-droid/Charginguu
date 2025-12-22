import "../profile/ProfileSection.css";

const PaymentMethods = ({ goBack }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <span onClick={goBack}>←</span>
        <h3>Payment Methods</h3>
      </div>
      <div className="section-content">
        <p>No payment methods yet.</p>
        {/* Later, add payment method UI */}
      </div>
    </div>
  );
};

export default PaymentMethods;
/*import { useNavigate } from "react-router-dom";
import "./SavedCards.css"; // reuse same CSS

const PaymentMethods = () => {
  const navigate = useNavigate();

  const payments = [
    { method: "PayPal", email: "user@example.com" },
    { method: "Google Pay", phone: "+91 9876543210" },
    { method: "UPI", id: "user@upi" },
  ];

  return (
    <div className="cards-container">
      <div className="cards-header">
        <span onClick={() => navigate("/profile")}>←</span>
        <h3>Payment Methods</h3>
      </div>

      {payments.map((item, index) => (
        <div className="card-item" key={index}>
          <h4>{item.method}</h4>
          <p>{item.email || item.phone || item.id}</p>
        </div>
      ))}

      <button className="add-card-btn">+ Add New Payment Method</button>
    </div>
  );
};

export default PaymentMethods;*/