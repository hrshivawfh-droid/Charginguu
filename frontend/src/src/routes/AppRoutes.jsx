import { Routes, Route } from "react-router-dom";

import SplashScreen from "../features/splash/SplashScreen";
import Onboarding from "../features/onboarding/Onboarding";
import Login from "../features/auth/Login";
import Signup from "../features/auth/Signup";
import ForgotPassword from "../features/auth/ForgotPassword";
import Home from "../pages/Home";
import ProfileView from "../features/profile/ProfileView";
import EditProfile from "../features/profile/EditProfile";
import MyBookings from "../features/bookings/MyBookings"
import ChargingHistory from "../features/bookings/ChargingHistory";
import SavedCards from "../features/payments/SavedCards";
import PaymentMethods from "../features/payments/PaymentMethods";
import Preferences from "../features/preferences/Preferences";
import InviteFriends from "../features/invite/InviteFriends";
import HelpSupport from "../features/help/HelpSupport";
import Profile from "../features/profile/Profile";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<ProfileView />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      <Route path="/charging-history" element={<ChargingHistory />} />
      <Route path="/saved-cards" element={<SavedCards />} />
      <Route path="/payment-methods" element={<PaymentMethods />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/invite-friends" element={<InviteFriends />} />
      <Route path="/help-support" element={<HelpSupport />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
};

export default AppRoutes;