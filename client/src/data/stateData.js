const stateData = {
  Maharashtra: {
    ndvi: 0.72,
    soilMoisture: "Moderate (25%)",
    weather: { temp: "32°C", rainfall: "8mm", humidity: "60%" },
    crops: ["Cotton", "Soybean", "Sugarcane"]
  },
  Punjab: {
    ndvi: 0.81,
    soilMoisture: "High (35%)",
    weather: { temp: "30°C", rainfall: "12mm", humidity: "70%" },
    crops: ["Wheat", "Rice", "Maize"]
  },
  TamilNadu: {
    ndvi: 0.68,
    soilMoisture: "Low (18%)",
    weather: { temp: "34°C", rainfall: "5mm", humidity: "50%" },
    crops: ["Millet", "Groundnut", "Sugarcane"]
  },
  Gujarat: {
    ndvi: 0.65,
    soilMoisture: "Low (20%)",
    weather: { temp: "35°C", rainfall: "4mm", humidity: "45%" },
    crops: ["Cotton", "Groundnut", "Bajra"]
  }
};

export default stateData;
