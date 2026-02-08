import React, { useState } from "react";

const RoutePlanner = () => {
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

    setLoading(true);

    await fetch("http://localhost:8000/find-route", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ start, end }),
    });

    setLoading(false);
  };

  return (
    <div className="w-80 bg-gradient-to-br from-[#0f172a] to-[#0b1220] border border-primary/20 rounded-2xl p-5 shadow-[0_0_40px_rgba(211,246,106,0.05)] backdrop-blur-xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-primary font-bold tracking-wide uppercase text-sm flex items-center gap-2">
          <span className="material-symbols-outlined text-base">navigation</span>
          Route Planner
        </h2>
        <button className="text-gray-400 hover:text-white transition">
          ✕
        </button>
      </div>

      {/* Input Section */}
      <div className="flex flex-col gap-4 relative">

        {/* Vertical Connector Line */}
        <div className="absolute left-3 top-7 bottom-7 w-[2px] bg-gradient-to-b from-primary/60 to-transparent"></div>

        {/* Start Input */}
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full border-2 border-primary bg-[#0f172a] z-10"></div>
          <input
            value={start}
            onChange={(e) => setStart(e.target.value)}
            type="text"
            placeholder="Start Location"
            className="flex-1 bg-[#0b1220] border border-primary/20 focus:border-primary rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none focus:ring-0 transition"
          />
        </div>

        {/* GPS Button */}
        <button
          onClick={handleUseMyLocation}
          className="text-[11px] text-primary hover:text-white transition text-left ml-6"
        >
          {gpsActive ? "Fetching GPS..." : "Use My Current Location"}
        </button>

        {/* Destination Input */}
        <div className="flex items-center gap-3">
          <div className="size-3 rounded-full bg-primary z-10 shadow-[0_0_6px_rgba(211,246,106,0.6)]"></div>
          <input
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            type="text"
            placeholder="Destination"
            className="flex-1 bg-[#0b1220] border border-primary/40 focus:border-primary rounded-lg px-3 py-2 text-xs text-white font-mono focus:outline-none transition"
          />
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 w-full bg-primary/20 border border-primary/40 text-primary font-bold py-2 rounded-xl hover:bg-primary hover:text-[#0f172a] transition-all duration-300 uppercase tracking-wide text-xs shadow-[0_0_15px_rgba(211,246,106,0.15)]"
      >
        {loading ? "Calculating Safe Route..." : "Start Navigation"}
      </button>
    </div>
  );
};

export default RoutePlanner;
