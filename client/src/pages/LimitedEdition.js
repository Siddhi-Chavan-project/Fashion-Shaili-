import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LimitedEdition.css";

const LimitedEdition = () => {
  const navigate = useNavigate();
  const targetDate = new Date("2025-03-26T13:11:59").getTime();
  //const targetDate = new Date().setHours(9, 30, 0, 0);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
      minutes: Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))),
      seconds: Math.max(0, Math.floor((difference % (1000 * 60)) / 1000)),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      console.log("Time Left:", calculateTimeLeft()); // Debugging output
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      navigate("/saleover");
    } else {
      navigate("/category/limited-edition");
    }
  };

  return (
    <div
      className="limited-banner"
      style={{ backgroundImage: "url('/images/about.jpg')" }}
      onClick={handleRedirect} // Handle the click event based on countdown status
    >
      <div className="limited-content">
        <h1 className="limited-title">🔥 Limited Edition Sale!</h1>
        <p className="limited-subtext">Exclusive styles available for a limited time.</p>
        <div className="countdown">
          {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
            <span className="expired-message">⏳ Sale is Over!</span>
          ) : (
            <>
              <span>{timeLeft.days}d </span>
              <span>{timeLeft.hours}h </span>
              <span>{timeLeft.minutes}m </span>
              <span>{timeLeft.seconds}s</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LimitedEdition;

