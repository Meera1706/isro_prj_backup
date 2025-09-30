import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const mockData = [
  { region:"Punjab", lat:30.9, lng:75.85, crop:"Wheat", ndvi:0.72, soilMoisture:0.56 },
  { region:"Haryana", lat:29.06, lng:76.09, crop:"Rice", ndvi:0.65, soilMoisture:0.61 },
  { region:"Uttar Pradesh", lat:26.85, lng:80.95, crop:"Sugarcane", ndvi:0.68, soilMoisture:0.59 },
];

function MapView({ region }) {
  const filteredData = region === "All" ? mockData : mockData.filter(d=>d.region===region);

  return (
    <div style={{ width:"100%", height:"400px", borderRadius:"10px" }}>
      <MapContainer center={[22.0,78.0]} zoom={5} style={{ width:"100%", height:"100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; OpenStreetMap contributors" />
        {filteredData.map((d,i)=>(
          <Marker key={i} position={[d.lat,d.lng]}>
            <Popup>
              <strong>{d.region}</strong><br/>
              Crop: {d.crop}<br/>
              NDVI: {d.ndvi}<br/>
              Soil Moisture: {d.soilMoisture}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;