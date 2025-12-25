import React, { useState } from "react";
import "../styles.css";

function CropAdvisor() {
  const [queryType, setQueryType] = useState("area");
  const [area, setArea] = useState("");
  const [temperature, setTemperature] = useState("");
  const [humidity, setHumidity] = useState("");
  const [soilMoisture, setSoilMoisture] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

const REGION_DATA = {
  ahmedabad: { temp: 33, hum: 45, soil: 35 },
  surat: { temp: 32, hum: 50, soil: 40 },
  vadodara: { temp: 31, hum: 55, soil: 45 },
  rajkot: { temp: 30, hum: 50, soil: 40 },
  mumbai: { temp: 30, hum: 70, soil: 55 },
  pune: { temp: 27, hum: 50, soil: 40 },
  nagpur: { temp: 28, hum: 60, soil: 50 },
  nashik: { temp: 29, hum: 55, soil: 45 },
  bhopal: { temp: 28, hum: 65, soil: 55 },
  indore: { temp: 29, hum: 60, soil: 50 },
  gwalior: { temp: 30, hum: 55, soil: 45 },
  jaipur: { temp: 31, hum: 50, soil: 40 },
  jodhpur: { temp: 32, hum: 45, soil: 35 },
  kota: { temp: 30, hum: 60, soil: 50 },
  lucknow: { temp: 30, hum: 65, soil: 55 },
  kanpur: { temp: 31, hum: 60, soil: 50 },
  varanasi: { temp: 32, hum: 55, soil: 45 },
  patna: { temp: 31, hum: 60, soil: 50 },
  ranchi: { temp: 28, hum: 70, soil: 55 },
  bhubaneswar: { temp: 30, hum: 75, soil: 60 },
  cuttack: { temp: 30, hum: 75, soil: 60 },
  guwahati: { temp: 28, hum: 80, soil: 65 },
  kolkata: { temp: 31, hum: 75, soil: 65 },
  chennai: { temp: 31, hum: 70, soil: 60 },
  coimbatore: { temp: 30, hum: 65, soil: 55 },
  madurai: { temp: 32, hum: 60, soil: 50 },
  salem: { temp: 31, hum: 65, soil: 55 },
  bengaluru: { temp: 26, hum: 65, soil: 50 },
  mysuru: { temp: 25, hum: 70, soil: 55 },
  hyderabad: { temp: 28, hum: 60, soil: 50 },
  warangal: { temp: 29, hum: 55, soil: 45 },
  vijayawada: { temp: 30, hum: 60, soil: 50 },
  visakhapatnam: { temp: 29, hum: 65, soil: 55 },
  amritsar: { temp: 30, hum: 50, soil: 40 },
  ludhiana: { temp: 31, hum: 45, soil: 35 },
  chandigarh: { temp: 30, hum: 50, soil: 40 },
  shimla: { temp: 20, hum: 60, soil: 50 },
  dehradun: { temp: 25, hum: 65, soil: 55 },
  srinagar: { temp: 15, hum: 70, soil: 60 },
  jammu: { temp: 30, hum: 55, soil: 50 },
  thiruvananthapuram: { temp: 29, hum: 80, soil: 65 },
  kochi: { temp: 30, hum: 75, soil: 60 },
  gujarat: { temp: 32, hum: 40, soil: 30 },
  maharashtra: { temp: 28, hum: 55, soil: 40 },
  madhya_pradesh: { temp: 29, hum: 60, soil: 50 },
  rajasthan: { temp: 31, hum: 50, soil: 40 },
  uttar_pradesh: { temp: 30, hum: 60, soil: 50 },
  bihar: { temp: 31, hum: 65, soil: 55 },
  jharkhand: { temp: 28, hum: 70, soil: 55 },
  odisha: { temp: 30, hum: 75, soil: 60 },
  west_bengal: { temp: 31, hum: 70, soil: 60 },
  tamil_nadu: { temp: 32, hum: 65, soil: 55 },
  karnataka: { temp: 28, hum: 65, soil: 50 },
  telangana: { temp: 29, hum: 60, soil: 50 },
  andhra_pradesh: { temp: 30, hum: 60, soil: 50 },
  punjab: { temp: 30, hum: 50, soil: 40 },
  haryana: { temp: 31, hum: 45, soil: 35 },
  himachal_pradesh: { temp: 20, hum: 60, soil: 50 },
  uttarakhand: { temp: 25, hum: 65, soil: 55 },
  kerala: { temp: 27, hum: 75, soil: 70 },
  assam: { temp: 28, hum: 80, soil: 65 },
  chhattisgarh: { temp: 29, hum: 60, soil: 50 }
};

  const validateInputs = (t, h, s) => {
    if (t < 0 || t > 60) {
      alert("⚠️ Temperature value is impractical. Enter between 0°C and 60°C.");
      return false;
    }
    if (h < 0 || h > 100) {
      alert("⚠️ Humidity value is impractical. Enter between 0% and 100%.");
      return false;
    }
    if (s < 0 || s > 100) {
      alert("⚠️ Soil moisture value is impractical. Enter between 0% and 100%.");
      return false;
    }
    return true;
  };

  const generateRecommendations = (t, h, s, regionLabel = null) => {
    t = Number(t);
    h = Number(h);
    s = Number(s);
    let crops = [];
    let details = [];
    let tips = [];

    if (t < 20) {
      crops = ["Wheat", "Barley"];
      details = [
        "Wheat: Thrives below 20°C in fertile loamy soil.",
        "Barley: Grows well in cool, well-drained soil, ideal for rotation."
      ];
    } else if (t >= 20 && t < 30) {
      crops = ["Rice", "Maize"];
      details = [
        "Rice: Requires warm weather and high humidity.",
        "Maize: Adapts to moderate rainfall and warm temperatures."
      ];
    } else {
      crops = ["Millet", "Sorghum"];
      details = [
        "Millet: Drought-tolerant, thrives in hot and dry regions.",
        "Sorghum: Excellent for high temperatures, dry soil tolerance."
      ];
    }

    if (s < 30) {
      tips.push("💧 Soil moisture is low — increase irrigation and use mulching.");
    } else if (s >= 30 && s <= 70) {
      tips.push("✅ Soil moisture is ideal for most crops — maintain consistency.");
    } else {
      tips.push("⚠️ Soil is very wet — improve drainage and avoid waterlogging.");
    }

    if (h > 80) tips.push("🌫️ High humidity may increase pest/disease risks — monitor crops.");

    return { crops, details, tips, regionLabel, summary: `Temperature: ${t}°C, Humidity: ${h}%, Soil Moisture: ${s}%` };
  };

  const handleFetchByArea = () => {
    setLoading(true);
    setError("");
    setResponse(null);
    const key = area.trim().toLowerCase();
    if (!key) {
      alert("Please enter an area name.");
      setLoading(false);
      return;
    }

    const region = REGION_DATA[key];
    if (!region) {
      setError("⚠️ Unknown area name. Please check spelling or use Manual Input.");
      setLoading(false);
      return;
    }

    const rec = generateRecommendations(region.temp, region.hum, region.soil, key);
    setResponse(rec);
    setLoading(false);
  };

  const handleManualFetch = () => {
    if (!temperature || !humidity || !soilMoisture) {
      alert("Please fill all fields.");
      return;
    }
    const t = Number(temperature);
    const h = Number(humidity);
    const s = Number(soilMoisture);
    if (!validateInputs(t, h, s)) return;

    setLoading(true);
    const rec = generateRecommendations(t, h, s);
    setResponse(rec);
    setLoading(false);
  };

  return (
    <div className="crop-advisor-container">
      <h2 className="title">🌾 AI Crop Advisor</h2>

      <div className="query-buttons">
        <button onClick={() => setQueryType("area")} className={queryType === "area" ? "active" : ""}>
          By Area Name
        </button>
        <button onClick={() => setQueryType("manual")} className={queryType === "manual" ? "active" : ""}>
          Manual Input
        </button>
      </div>

      {queryType === "area" ? (
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter state or city (e.g., Gujarat, Mumbai)"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <button onClick={handleFetchByArea}>{loading ? "Analyzing..." : "Get Crop Suggestions"}</button>
          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
        </div>
      ) : (
        <div className="input-container">
          <input
            type="number"
            placeholder="Temperature (°C)"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
          <input
            type="number"
            placeholder="Humidity (%)"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
          />
          <input
            type="number"
            placeholder="Soil Moisture (%)"
            value={soilMoisture}
            onChange={(e) => setSoilMoisture(e.target.value)}
          />
          <button onClick={handleManualFetch}>{loading ? "Analyzing..." : "Get Crop Suggestions"}</button>
        </div>
      )}

      {response && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "30px", gap: "20px" }}>
          {/* Stylish crop name cards */}
          {response.crops.map((crop, idx) => (
            <div
              key={idx}
              style={{
                width: "40%",
                background: "linear-gradient(135deg, #e7fbe7, #d6f7d6)",
                borderRadius: "16px",
                padding: "18px",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.1rem",
                color: "#204020",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              🌱 {crop}
            </div>
          ))}

          {/* Details and Tips side by side */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {/* Crop details card */}
            <div
              style={{
                width: "45%",
                backgroundColor: "#f1fdfc",
                border: "1px solid #c2f3ee",
                borderRadius: "14px",
                padding: "20px",
                textAlign: "left",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>🌿 Crop Details</h3>
              {response.details.map((d, i) => (
                <p key={i} style={{ marginBottom: "8px" }}>• {d}</p>
              ))}
            </div>

            {/* Tips card */}
            <div
              style={{
                width: "45%",
                backgroundColor: "#fffbe6",
                border: "1px solid #ffef99",
                borderRadius: "14px",
                padding: "20px",
                textAlign: "left",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ textAlign: "center", marginBottom: "10px" }}>💡 Tips</h3>
              {response.tips.map((tip, i) => (
                <p key={i}>• {tip}</p>
              ))}
              <hr style={{ margin: "10px 0", border: "none", borderTop: "1px solid #ccc" }} />
              <p style={{ fontSize: "13px", color: "#555" }}>{response.summary}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CropAdvisor;
