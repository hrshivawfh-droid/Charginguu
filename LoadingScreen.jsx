import React from "react";
import './LoadingScreen.css'; 
import battery from '../assest/full-battery.png'

function LoadingScreen() {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <img
          src={battery}
          alt="Battery"
          className="battery-icon"
        />
        <h1 className="app-name">Charginguu</h1>
        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;