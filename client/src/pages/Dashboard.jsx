import React, { useState } from "react";
import MapView from "../components/MapView";

function Dashboard() {
  const [region, setRegion] = useState("All");

  return (
    <div style={{ padding:'2rem' }}>
      <h2>Satellite Data Dashboard</h2>
      <p>Select a region to view simulated satellite data.</p>
      <select value={region} onChange={(e)=>setRegion(e.target.value)} style={{ marginBottom:'1rem' }}>
        <option value="All">All</option>
        <option value="Punjab">Punjab</option>
        <option value="Haryana">Haryana</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
      </select>
      <div style={{ display:'flex', gap:'2rem', flexWrap:'wrap' }}>
        <MapView region={region} />
      </div>
    </div>
  );
}

export default Dashboard;