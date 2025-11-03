import React, { useState } from "react";
import "./Auth.css";

const OTPModal = ({ onClose, onVerify }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Enter OTP</h3>
        <form onSubmit={handleSubmit} className="otp-form">
          {otp.map((val, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              value={val}
              onChange={(e) => handleChange(e.target.value, i)}
            />
          ))}
          <button type="submit" className="btn-primary">
            Verify
          </button>
        </form>
        <button className="btn-text" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OTPModal;
