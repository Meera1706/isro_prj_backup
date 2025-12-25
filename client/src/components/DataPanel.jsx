import React from "react";

const DataPanel = ({ selectedState, data }) => {
  if (!selectedState) {
    return <p>Click on a state to see details.</p>;
  }

  const stateInfo = data[selectedState];
  if (!stateInfo) {
    return <p>No data available for {selectedState}.</p>;
  }

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-4">
      <h2 className="text-xl mb-2 font-bold">{selectedState}</h2>
      <p><strong>NDVI:</strong> {stateInfo.ndvi}</p>
      <p><strong>Soil Moisture:</strong> {stateInfo.soilMoisture}</p>
      <p><strong>Weather:</strong> {stateInfo.weather.temp}, Rainfall: {stateInfo.weather.rainfall}, Humidity: {stateInfo.weather.humidity}</p>
      <p><strong>Suitable Crops:</strong> {stateInfo.crops.join(", ")}</p>
    </div>
  );
};

export default DataPanel;
