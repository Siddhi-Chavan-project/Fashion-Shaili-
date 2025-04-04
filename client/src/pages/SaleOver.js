import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SaleOver.css"; 
import { FaSadTear } from "react-icons/fa"; 

const SaleOver = () => {
  const navigate = useNavigate();

  return (
    <div className="sale-over-container">
      <div className="sale-over-content">
        <FaSadTear className="sale-over-icon" />
        <h1>Oops! The Sale is Over</h1>
        <p>Stay tuned for our next exclusive collection. Don’t miss out!</p>
        <button onClick={() => navigate("/")} className="back-button">
          🛍️ Explore More
        </button>
      </div>
    </div>
  );
};

export default SaleOver;
