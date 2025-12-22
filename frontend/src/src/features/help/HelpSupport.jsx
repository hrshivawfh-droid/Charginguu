import "../profile/ProfileSection.css";

const HelpSupport = ({ goBack }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <span onClick={goBack}>←</span>
        <h3>Help & Support</h3>
      </div>
      <div className="section-content">
        <p>Need help? Contact support@example.com</p>
        {/* Later, add FAQ or support chat */}
      </div>
    </div>
  );
};

export default HelpSupport;
/*import { useNavigate } from "react-router-dom";
import "./HelpSupport.css";

const HelpSupport = () => {
  const navigate = useNavigate();

  const faqs = [
    { question: "How do I book a charging station?", answer: "Go to Home, search your station and book." },
    { question: "How do I cancel a booking?", answer: "Go to My Bookings, select booking, and cancel." },
    { question: "How do I add a payment method?", answer: "Go to Payment Methods and click Add New." },
  ];

  return (
    <div className="help-container">
      <div className="help-header">
        <span onClick={() => navigate("/profile")}>←</span>
        <h3>Help & Support</h3>
      </div>

      <div className="help-card">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h4>{faq.question}</h4>
            <p>{faq.answer}</p>
          </div>
        ))}

        <div className="contact-section">
          <p>Need more help?</p>
          <button onClick={() => alert("Contact us via email: support@chargingu.com")}>
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;*/