import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-container">
      <div className="onboarding-content">

        {/* LOGO */}
        <div className="logo">
          ⚡
        </div>

        {/* APP NAME */}
        <h1 className="app-name">ChargingU</h1>

        {/* CONTENT */}
        <p className="app-text">
          Find nearby mobile charging stations, check availability,
          and charge your mobile with ease.
        </p>

        <p className="app-text">
          Simple, fast, and reliable mobile charging experience.
        </p>

        {/* CTA BUTTON */}
        <button
          className="start-button"
          onClick={() => navigate("/login")}
        >
          Let’s Get Started
        </button>

      </div>
    </div>
  );
};

export default Onboarding;
/*import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="onboard-container">
      <div className="onboard-card">
        <h1>ChargingU</h1>
        <p>
          Find nearby charging stations, manage bookings, and power up your
          device anytime.
        </p>

        <button onClick={() => navigate("/login")}>
          Let’s Get Started
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/onboarding.png";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2>Welcome to ChargingU</h2>
      <img src={img} width="300" />
      <br />
      <button onClick={() => navigate("/login")}>Let's Get Started</button>
    </div>
  );
}*/