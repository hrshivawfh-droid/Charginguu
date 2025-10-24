import React, { useEffect } from "react";

import "./SplashScreen.css";

import { useNavigate } from "react-router-dom";



const SplashScreen = () => {

  const navigate = useNavigate();



  useEffect(() => {

    const timer = setTimeout(() => {

      navigate("/onboarding");

    }, 2500);

    return () => clearTimeout(timer);

  }, [navigate]);



  return (

    <div className="splash-container">

      <div className="splash-logo">

        ⚡ <span className="brand-name">Charginguu</span>

      </div>

      <div className="loading-bar">

        <div className="progress"></div>

      </div>

    </div>

  );

};



export default SplashScreen;