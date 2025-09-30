import React from "react";
import satellites from "../data/satellites";

function Awareness() {
  return (
    <div style={{ padding:'2rem' }}>
      <h2 style={{ textAlign:'center', marginBottom:'2rem' }}>🛰️ ISRO Satellites Supporting Indian Agriculture</h2>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px,1fr))', gap:'1.5rem' }}>
        {satellites.map((sat,i)=>(
          <div key={i} className="card" style={{ background:'#fff', borderRadius:'12px', overflow:'hidden' }}>
            <img src={sat.image} alt={sat.name} style={{ width:'100%', height:'180px', objectFit:'cover' }}/>
            <div style={{ padding:'1rem' }}>
              <h3>{sat.name}</h3>
              <p><strong>Purpose:</strong> {sat.purpose}</p>
              <p style={{ fontSize:'0.9rem', color:'#555' }}><strong>Launched:</strong> {sat.launched}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Awareness;