import { useState } from "react";
import ProfileDrawer from "../features/profile/ProfileDrawer";
import mapImage from "../assets/images/map.png";
import "./Home.css";

export default function Home() {
  const [profileOpen, setProfileOpen] = useState(false);
  const [zoom, setZoom] = useState(1);

  const pins = [
    { id: 1, top: "35%", left: "45%" },
    { id: 2, top: "55%", left: "60%" },
    { id: 3, top: "65%", left: "30%" },
  ];

  const zoomIn = () => {
    if (zoom < 1.8) setZoom((z) => z + 0.1);
  };

  const zoomOut = () => {
    if (zoom > 1) setZoom((z) => z - 0.1);
  };

  return (
    <div className="home-root">
      {/* TOP BAR */}
      <div className="home-topbar">
        {/* LEFT LOGO */}
        <div className="home-logo">
          <span className="logo-circle">⚡</span>
          <span className="logo-text">Chargingu</span>
        </div>

        {/* SEARCH */}
        <input
          className="home-search"
          placeholder="Search charging station"
        />

        {/* PROFILE ICON ONLY (NO TEXT) */}
        <div
          className="home-profile-icon"
          onClick={() => setProfileOpen(true)}
        >
          👤
        </div>
      </div>

      {/* MAP */}
      <div className="home-map">
        <div
          className="map-zoom-wrapper"
          style={{ transform: `scale(${zoom})` }}
        >
          <img
            src={mapImage}
            alt="charging map"
            className="map-img"
          />

          {pins.map((p) => (
            <div
              key={p.id}
              className="map-pin"
              style={{ top: p.top, left: p.left }}
            />
          ))}
        </div>

        {/* ZOOM CONTROLS */}
        <div className="map-zoom-controls">
          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>−</button>
        </div>
      </div>

      {/* PROFILE DRAWER */}
      <ProfileDrawer
        open={profileOpen}
        onClose={() => setProfileOpen(false)}
      />
    </div>
  );
}