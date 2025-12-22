import "./Auth.css";

function OTPModal() {
  return (
    <div className="otp-box">
      <h3>Enter OTP</h3>
      <input type="text" placeholder="OTP" />
      <button>Verify</button>
    </div>
  );
}

export default OTPModal;