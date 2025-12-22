import "../profile/ProfileSection.css";

const InviteFriends = ({ goBack }) => {
  return (
    <div className="profile-section">
      <div className="section-header">
        <span onClick={goBack}>←</span>
        <h3>Invite Friends</h3>
      </div>
      <div className="section-content">
        <p>No invites yet.</p>
        {/* Later, add invite links/buttons */}
      </div>
    </div>
  );
};

export default InviteFriends;
/*import { useNavigate } from "react-router-dom";
import "./InviteFriends.css";

const InviteFriends = () => {
  const navigate = useNavigate();
  const referralCode = "CHRG1234";

  const copyCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert("Referral code copied!");
  };

  return (
    <div className="invite-container">
      <div className="invite-header">
        <span onClick={() => navigate("/profile")}>←</span>
        <h3>Invite Friends</h3>
      </div>

      <div className="invite-card">
        <p>Share your referral code with friends and earn rewards!</p>
        <div className="referral-box">
          <span>{referralCode}</span>
          <button onClick={copyCode}>Copy</button>
        </div>

        <button className="share-btn">Share via WhatsApp / Social</button>
      </div>
    </div>
  );
};

export default InviteFriends;*/