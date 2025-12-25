import React from "react";
import "../styles.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Background video from public folder */}
      <video className="background-video" autoPlay loop muted>
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay content */}
      <div className="home-content">
        <h1>Welcome to ISRO Agri Monitor 🌾</h1>
        <p>
          This platform provides satellite-based crop monitoring information, AI-powered crop suggestions, 
          and awareness about sustainable farming practices.
        </p>
        <p>
          Explore the dashboard to see real-time crop data, or use the Crop Advisor to find the best crops 
          for your area or based on manual conditions.
        </p>
      </div>
    </div>
    
  );
};

export default Home;
