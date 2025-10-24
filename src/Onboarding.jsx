import React, { useState } from "react";
import "./Onboarding.css";
import { useNavigate } from "react-router-dom";

const screens = [
  {
    title: "Never run out of power again.",
    desc: "Discover available charging spots for your devices, wherever you are.",
    img: "https://cdn-icons-png.flaticon.com/512/854/854894.png",
  },
  {
    title: "Book your spot, hassle-free.",
    desc: "Secure your charging slot in advance and pay seamlessly.",
    img: "https://cdn-icons-png.flaticon.com/512/833/833524.png",
  },
  {
    title: "Charge smart, get rewarded.",
    desc: "Enjoy exclusive offers and cashback on every charge.",
    img: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
  },
];

const Onboarding = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (index < screens.length - 1) setIndex(index + 1);
    else navigate("/login");
  };

  const skip = () => navigate("/login");
  const back = () => setIndex(index - 1);

  return (
    <div className="onboarding-container">
      <img src={screens[index].img} alt="illustration" className="onboard-img" />

      <h2>{screens[index].title}</h2>
      <p>{screens[index].desc}</p>

      <div className="dots">
        {screens.map((_, i) => (
          <span key={i} className={i === index ? "dot active" : "dot"}></span>
        ))}
      </div>

      <div className="btn-row">
        {index === 0 ? (
          <button className="btn-text" onClick={skip}>Skip</button>
        ) : (
          <button className="btn-text" onClick={back}>Back</button>
        )}

        <button className="btn-next" onClick={next}>
          {index === screens.length - 1 ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;