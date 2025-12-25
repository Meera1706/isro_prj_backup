import React, { useState } from "react";
import MapView from "../components/MapView"; // marker-based map
import DataPanel from "../components/DataPanel"; // keeps working
import stateData from "../data/stateData";     // same data

const Dashboard = () => {
  const [selectedState, setSelectedState] = useState(null);

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <div className="p-6">
      <h2 className="zalando-sans-expanded-700 text-2xl mb-4">
            ISRO Agriculture Dashboard</h2>
      <MapView onStateClick={handleStateClick} />
      <DataPanel selectedState={selectedState} data={stateData} />
    </div>
  );
};

export default Dashboard;
