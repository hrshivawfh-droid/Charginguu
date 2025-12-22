import "./Header.css";

export default function Header({ onProfileClick }) {
  return (
    <header className="app-header">
      {/* LEFT: LOGO */}
      <div className="header-logo">
        <span className="logo-icon">⚡</span>
        <span className="logo-text">ChargingU</span>
      </div>

      {/* CENTER: SEARCH */}
      <input
        type="text"
        className="header-search"
        placeholder="Search charging station"
      />

      {/* RIGHT: PROFILE ICON ONLY */}
      <div className="header-profile" onClick={onProfileClick}>
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
        />
      </div>
    </header>
  );
}