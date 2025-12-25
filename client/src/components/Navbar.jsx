import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ 
      display:'flex', 
      justifyContent:'space-between', 
      alignItems:'center', 
      padding:'1rem 2rem', 
      background:'#1c2541', 
      color:'white' 
    }}>
      <div>
        <h1 className="zalando-sans-expanded-700" style={{ margin: 0, color:'#00C49F' }}>
          ISRO Agri Monitor
        </h1>
        <p className="zalando-sans-expanded-400" style={{ margin: 0, fontSize: '0.9rem', color: '#ffffff' }}>
          Satellite-based crop monitoring info
        </p>
      </div>

      <div style={{ display:'flex', gap:'1rem', alignItems:'center' }}>
        <Link to="/" style={{ color:'white', textDecoration:'none' }}>Home</Link>
        <Link to="/dashboard" style={{ color:'white', textDecoration:'none' }}>Dashboard</Link>
        <Link to="/awareness" style={{ color:'white', textDecoration:'none' }}>Awareness</Link>
        {/* ✅ New link added for free mock CropAdvisor */}
        <Link to="/crop-advisor" style={{ color:'white', textDecoration:'none' }}>Crop Advisor</Link>
      </div>
    </nav>
  );
}

export default Navbar;
