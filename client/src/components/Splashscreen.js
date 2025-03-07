import React, { useEffect } from 'react';
import "../styles/Splashscreen.css"; 


 
const Splashscreen = ({ setSplash }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplash(false); // Hide splash screen after 3 seconds
    }, 30000);
    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [setSplash]);

  return (
    <div className="splash-screen">
  <img src="/images/icon.jpg" alt="Splash Screen" />

    </div>
  );
};

export default Splashscreen;
