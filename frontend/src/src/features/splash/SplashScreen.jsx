import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import splashBg from "../../assets/images/splash.jpg"; // ✅ IMPORT IMAGE
import "./SplashScreen.css";

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      className="splash-container"
      style={{ backgroundImage: `url(${splashBg})` }}
    >
      <div className="splash-overlay">
        <div className="splash-content">
          <h1>⚡ ChargingU</h1>
          <p>Powering your journey, everywhere</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;