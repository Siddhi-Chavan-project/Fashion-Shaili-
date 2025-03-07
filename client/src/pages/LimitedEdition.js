import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LimitedEdition.css"; 

const LimitedEdition = () => {
  const navigate = useNavigate();
  const targetDate = new Date("2025-03-31T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="limited-banner"
      style={{ backgroundImage: "url('/images/about.jpg')" }}
      onClick={() => navigate("/category/limited-edition")}
    >
      <div className="limited-content">
        <h1 className="limited-title">🔥 Limited Edition Sale!</h1>
        <p className="limited-subtext">Exclusive styles available for a limited time.</p>
        <div className="countdown">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
};

export default LimitedEdition;
