import React, { useState, useRef, useEffect } from "react";
import "./Auth.css";

const OTPModal = ({ onClose, onVerify }) => {
  const length = 6;
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRef = useRef([]);

  useEffect(() => {
    // Autofocus first field when modal opens
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;   // allow only digit or empty
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      // move to next input
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // If backspace pressed and current field is empty and not first, go back
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some(v => v === "")) {
      alert("Please enter complete OTP");
      return;
    }
    const enteredCode = otp.join("");
    onVerify(enteredCode);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>Enter OTP</h3>
        <form onSubmit={handleSubmit} className="otp-form">
          {otp.map((val, idx) => (
            <input
              key={idx}
              ref={el => inputsRef.current[idx] = el}
              type="text"
              maxLength="1"
              value={val}
              onChange={e => handleChange(e.target.value, idx)}
              onKeyDown={e => handleKeyDown(e, idx)}
            />
          ))}
          <button type="submit" className="btn-primary">Verify</button>
        </form>
        <button className="btn-text" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default OTPModal;
