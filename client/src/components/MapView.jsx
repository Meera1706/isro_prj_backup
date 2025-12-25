import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

// State coordinates
const stateCoordinates = {
  AndhraPradesh: [15.9129, 79.7400],
  ArunachalPradesh: [28.2180, 94.7278],
  Assam: [26.2006, 92.9376],
  Bihar: [25.0961, 85.3131],
  Chhattisgarh: [21.2787, 81.8661],
  Goa: [15.2993, 74.1240],
  Gujarat: [22.2587, 71.1924],
  Haryana: [29.0588, 76.0856],
  HimachalPradesh: [31.1048, 77.1734],
  Jharkhand: [23.6102, 85.2799],
  Karnataka: [15.3173, 75.7139],
  Kerala: [10.8505, 76.2711],
  MadhyaPradesh: [22.9734, 78.6569],
  Maharashtra: [19.7515, 75.7139],
  Manipur: [24.6637, 93.9063],
  Meghalaya: [25.4670, 91.3662],
  Mizoram: [23.1645, 92.9376],
  Nagaland: [26.1584, 94.5624],
  Odisha: [20.9517, 85.0985],
  Punjab: [31.1471, 75.3412],
  Rajasthan: [27.0238, 74.2179],
  Sikkim: [27.5330, 88.5122],
  TamilNadu: [11.1271, 78.6569],
  Telangana: [18.1124, 79.0193],
  Tripura: [23.9408, 91.9882],
  UttarPradesh: [26.8467, 80.9462],
  Uttarakhand: [30.0668, 79.0193],
  WestBengal: [22.9868, 87.8550],
  AndamanNicobar: [11.7401, 92.6586],
  Chandigarh: [30.7333, 76.7794],
  DadraNagarHaveliDamanDiu: [20.3974, 72.8328],
  Delhi: [28.6139, 77.2090],
  JammuKashmir: [33.7782, 76.5762],
  Ladakh: [34.1526, 77.5770],
  Lakshadweep: [10.5667, 72.6417],
  Puducherry: [11.9416, 79.8083],
};


const MapView = ({ onStateClick }) => {
  const [liveData, setLiveData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch weather data from OpenWeatherMap for each state
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const results = {};
        for (const [state, coords] of Object.entries(stateCoordinates)) {
          const [lat, lon] = coords;
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_OWM_API_KEY}`
          );
          if (!res.ok) throw new Error(`Failed to fetch data for ${state}`);
          const data = await res.json();
          results[state] = {
            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
          };
        }
        setLiveData(results);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <MapContainer
      center={[22, 79]}
      zoom={5}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {Object.entries(stateCoordinates).map(([state, coords]) => (
        <Marker
          key={state}
          position={coords}
          icon={L.icon({
            iconUrl: markerIconPng,
            shadowUrl: markerShadowPng,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
          })}
          eventHandlers={{
            click: () => onStateClick(state),
          }}
        >
          <Popup>
            <strong>{state}</strong>
            {loading ? (
              <p>Loading data...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : liveData[state] ? (
              <div>
                <p>Temperature: {liveData[state].temperature} °C</p>
                <p>Humidity: {liveData[state].humidity} %</p>
                <p>Weather: {liveData[state].description}</p>
              </div>
            ) : (
              <p>Data not available</p>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
