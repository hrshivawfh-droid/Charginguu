import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./SplashScreen";
import Onboarding from "./Onboarding";
import Login from "./Login";
import Signup from "./Signup";
import ForgotPassword from "./ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/home" element={<div style={{ padding: 40 }}>🏠 User Home</div>} />
        <Route path="/host" element={<div style={{ padding: 40, background: "#000", color: "#fff" }}>👤 Host Dashboard</div>} />
      </Routes>
    </Router>
  );
}

export default App;