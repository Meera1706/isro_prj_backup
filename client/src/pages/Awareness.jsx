import React from "react";
import satellites from "../data/satellites";

function Awareness() {
  const firstRow = satellites.slice(0, 3);
  const secondRow = satellites.slice(3);

  const cardStyle = {
    background: "#fff",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    marginBottom: "2rem"
  };

  const miniGrid = {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    marginTop: "1rem"
  };

  const miniCard = {
    background: "#f9fafb",
    padding: "1rem",
    borderRadius: "10px",
    width: "240px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
    fontSize: "0.9rem"
  };

  return (
    <div style={{ padding: "2rem", background: "#f4f6f8" }}>

      {/* === TITLE === */}
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
        🛰️ ISRO & Technology in Indian Agriculture
      </h2>
      <p
        style={{
          textAlign: "center",
          maxWidth: "850px",
          margin: "0 auto 3rem",
          color: "#555"
        }}
      >
        This section explains how satellite data, weather information, and artificial intelligence
        together help farmers monitor crop health, manage risks, and improve productivity.
      </p>

      {/* === SATELLITES SECTION === */}
      <div style={cardStyle}>
        <h3 style={{ marginBottom: "1.5rem" }}>ISRO Satellites Supporting Agriculture</h3>

        {/* First row (3 cards centered) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1.5rem",
            flexWrap: "wrap"
          }}
        >
          {firstRow.map((sat, i) => (
            <SatelliteCard key={i} sat={sat} />
          ))}
        </div>

        {/* Second row (remaining cards centered) */}
        {secondRow.length > 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.5rem",
              marginTop: "1.5rem",
              flexWrap: "wrap"
            }}
          >
            {secondRow.map((sat, i) => (
              <SatelliteCard key={i} sat={sat} />
            ))}
          </div>
        )}
      </div>

      {/* === NDVI CARD === */}
      <div style={cardStyle}>
        <h3>🌱 Understanding NDVI (Vegetation Index)</h3>
        <p>
          NDVI (Normalized Difference Vegetation Index) is a satellite-based indicator that measures
          plant health and vegetation density using reflected light.
        </p>
        <ul>
          <li><strong>NDVI &gt; 0.6:</strong> Healthy and dense vegetation</li>
          <li><strong>NDVI 0.3 – 0.6:</strong> Moderate crop health</li>
          <li><strong>NDVI &lt; 0.3:</strong> Poor vegetation or dry land</li>
        </ul>
      </div>

      {/* === SMART AGRICULTURE DATA FLOW === */}
      <div style={cardStyle}>
        <h3>🔄 Smart Agriculture Data Flow</h3>

        <div style={miniGrid}>
          <div style={miniCard}>🛰️ ISRO satellites collect remote sensing data</div>
          <div style={miniCard}>📊 NDVI and land indicators are extracted</div>
          <div style={miniCard}>🌦️ Weather APIs provide real-time climate data</div>
          <div style={miniCard}>🤖 AI analyzes combined datasets</div>
          <div style={miniCard}>🌾 Crop advice and alerts are generated</div>
        </div>
      </div>

      {/* === WEATHER & DISASTER AWARENESS === */}
      <div style={cardStyle}>
        <h3>⚠️ Weather & Disaster Awareness</h3>

        <div style={miniGrid}>
          <div style={miniCard}>
            <strong>Drought</strong><br />
            Low NDVI and rainfall deficiency
          </div>
          <div style={miniCard}>
            <strong>Floods</strong><br />
            Excess rainfall detection
          </div>
          <div style={miniCard}>
            <strong>Heatwaves</strong><br />
            Temperature stress on crops
          </div>
          <div style={miniCard}>
            <strong>Unseasonal Rain</strong><br />
            Harvesting risks
          </div>
        </div>
      </div>

      {/* === SUSTAINABLE AGRICULTURE BENEFITS === */}
      <div style={cardStyle}>
        <h3>♻️ Sustainable Agriculture Benefits</h3>

        <div style={miniGrid}>
          <div style={miniCard}>💧 Efficient water usage</div>
          <div style={miniCard}>📉 Reduced crop loss</div>
          <div style={miniCard}>🌍 Climate-resilient crop planning</div>
          <div style={miniCard}>🌱 Improved soil health</div>
        </div>
      </div>

      {/* === EDUCATIONAL VALUE CARD === */}
      <div style={cardStyle}>
        <h3>🎓 Educational & Research Value</h3>
        <p>
          This platform helps students and researchers understand the practical use of Remote Sensing,
          Weather APIs, GIS, and AI in agriculture, preparing them for careers in AgriTech and Space
          Applications.
        </p>
      </div>

    </div>
  );
}

/* === Satellite Card Component === */
function SatelliteCard({ sat }) {
  return (
    <div
      style={{
        width: "260px",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
      }}
    >
      <img
        src={sat.image}
        alt={sat.name}
        style={{ width: "100%", height: "160px", objectFit: "cover" }}
      />
      <div style={{ padding: "1rem" }}>
        <h4>{sat.name}</h4>
        <p style={{ fontSize: "0.9rem" }}>
          <strong>Purpose:</strong> {sat.purpose}
        </p>
        <p style={{ fontSize: "0.85rem", color: "#555" }}>
          <strong>Launched:</strong> {sat.launched}
        </p>
      </div>
    </div>
  );
}

export default Awareness;
