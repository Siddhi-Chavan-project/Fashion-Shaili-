import React, { useState, useEffect } from "react";
import { useNavigate,useLocation } from "react-router-dom";

const Spinner = ({path="login"}) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
const location=useLocation()
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue ); // Correctly decrement count
    }, 1000)
    count === 0 &&   navigate(`/${path}`,{
      state:location.pathname,
    }) // Navigate when count reaches 0
    return()=>clearInterval(interval)
  }, [count, navigate,location,path]);

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "100vh",
        color: "navy",
      }}
    >
      <h5 className="text-center">Redirecting in {count} seconds...</h5>
      <div className="spinner-grow" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
