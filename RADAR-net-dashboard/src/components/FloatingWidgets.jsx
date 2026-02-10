import React, { useState } from "react";
import axios from 'axios';

const RoutePlanner = ({setGeojsonData}) => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [loading, setLoading] = useState(false);
  const [gpsActive, setGpsActive] = useState(false);

  const handleUseMyLocation = () => {
    setGpsActive(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        setStart(`${lat.toFixed(6)}, ${lon.toFixed(6)}`);
        setGpsActive(false);
      },
      () => {
        alert("Unable to fetch location");
        setGpsActive(false);
      }
    );
  };

 const handleSubmit = async () => {
  if (!start || !end) {
    alert("Please enter both locations");
    return;
  }

  // Validate start coordinates format
  const startParts = start.split(",");
  if (startParts.length !== 2) {
    alert("Please enter start location in format: latitude, longitude");
    return;
  }

  const startLat = parseFloat(startParts[0].trim());
  const startLon = parseFloat(startParts[1].trim());

  if (isNaN(startLat) || isNaN(startLon)) {
    alert("Invalid start coordinates");
    return;
  }

  setLoading(true);

  try {
    const payload = {
      start_lat: startLat,
      start_lon: startLon,
      destination: end.trim()
    };
    
    // 🔍 DEBUG: Log what we're sending
    console.log("📤 Sending to backend:", payload);

    const result = await axios.post("http://localhost:8000/process", payload);

    if(result.status === 404) {
      alert("Route not found. Please check your start and destination.");
      return;
    }
    // 🔍 DEBUG: Log what we received
    console.log("📥 Received from backend:", result.data);
    
    setGeojsonData(result.data);
  } catch (error) {
    console.error("Error fetching route:", error);
    alert("Failed to fetch route. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="w-80 bg-white border border-gray-200 rounded-2xl p-5 shadow-lg backdrop-blur-xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-emerald-600 font-bold tracking-wide uppercase text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-base">navigation</span>
          Route Planner
        </h2>
      </div>

      {/* Input Section */}
      <div className="flex flex-col gap-4 relative">

        {/* Vertical Connector Line */}
        <div className="absolute left-3 top-7 bottom-7 w-[2px] bg-gradient-to-b from-emerald-400 to-transparent"></div>

        {/* Start Input */}
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full border-2 border-emerald-500 bg-white z-10"></div>
          <input
            value={start}
            onChange={(e) => setStart(e.target.value)}
            type="text"
            placeholder="Start Location"
            className="flex-1 bg-gray-50 border border-gray-300 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-gray-800 font-mono focus:outline-none focus:ring-1 focus:ring-emerald-200 transition"
          />
        </div>

        {/* GPS Button */}
        <button
          onClick={handleUseMyLocation}
          className="text-[11px] text-emerald-600 hover:text-emerald-700 transition text-left ml-6 font-medium"
        >
          {gpsActive ? "Fetching GPS..." : "Use My Current Location"}
        </button>

        {/* Destination Input */}
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-emerald-500 z-10 shadow-[0_0_6px_rgba(16,185,129,0.6)]"></div>
          <input
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            type="text"
            placeholder="Destination"
            className="flex-1 bg-gray-50 border border-gray-300 focus:border-emerald-500 rounded-lg px-3 py-2 text-xs text-gray-800 font-mono focus:outline-none focus:ring-1 focus:ring-emerald-200 transition"
          />
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 w-full bg-emerald-500 border border-emerald-600 text-white font-bold py-2 rounded-xl hover:bg-emerald-600 transition-all duration-300 uppercase tracking-wide text-xs shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Calculating Safe Route..." : "Start Navigation"}
      </button>
    </div>
  );
};

export default RoutePlanner;
