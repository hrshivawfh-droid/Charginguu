import "../profile/ProfileSection.css";

const SavedCards = ({ goBack }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <span onClick={goBack}>←</span>
        <h3>Favourite Cards</h3>
      </div>
      <div className="section-content">
        <p>No saved cards.</p>
        {/* Later, map saved card UI */}
      </div>
    </div>
  );
};

export default SavedCards;
/*import { useNavigate } from "react-router-dom";
import "./SavedCards.css";

const SavedCards = () => {
  const navigate = useNavigate();

  const cards = [
    { cardName: "Visa **** 1234", expiry: "08/25" },
    { cardName: "MasterCard **** 5678", expiry: "11/26" },
  ];

  return (
    <div className="cards-container">
      <div className="cards-header">
        <span onClick={() => navigate("/profile")}>←</span>
        <h3>Favourite Cards</h3>
      </div>

      {cards.map((card, index) => (
        <div className="card-item" key={index}>
          <h4>{card.cardName}</h4>
          <p>Expiry: {card.expiry}</p>
        </div>
      ))}

      <button className="add-card-btn">+ Add New Card</button>
    </div>
  );
};

export default SavedCards;*/