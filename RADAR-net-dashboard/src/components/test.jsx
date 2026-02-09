import React from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const RouteMap = ({ geojsonData }) => {
  if (!geojsonData) return <p>No route data available</p>;

  const feature = geojsonData.features[0];
  const coordinates = feature.geometry.coordinates;
  const distanceKm = feature.properties.distance_km;
  const status = feature.properties.status;

  const start = coordinates[0];
  const end = coordinates[coordinates.length - 1];

  const center = [start[1], start[0]];

  // ETA Calculation (40 km/h avg speed)
  const avgSpeed = 40;
  const timeMinutes = Math.round((distanceKm / avgSpeed) * 60);

  const routeStyle = {
    color: status === "flooded" ? "red" : "green",
    weight: 5,
  };

  const startIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [30, 30],
  });

  const endIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149060.png",
    iconSize: [30, 30],
  });

  return (
    <div style={{ position: "relative" }}>
      
      {/* Floating Info Panel */}
      <div
        style={{
          position: "absolute",
          top: "15px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          background: "white",
          padding: "10px 20px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          fontWeight: "bold",
          color:"black"
        }}
      >
        📏 {distanceKm} km &nbsp; | &nbsp; ⏱ {timeMinutes} mins &nbsp; | &nbsp;
        {status === "flooded" ? "🔴 Flood Risk" : "🟢 Safe Route"}
      </div>

      <MapContainer
        center={center}
        zoom={13}
        style={{ height: "600px", width: "600px" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GeoJSON data={geojsonData} style={routeStyle} />

        <Marker position={[start[1], start[0]]} icon={startIcon}>
          <Popup>Start Point</Popup>
        </Marker>

        <Marker position={[end[1], end[0]]} icon={endIcon}>
          <Popup>
            Distance: {distanceKm} km <br />
            Estimated Time: {timeMinutes} mins
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default RouteMap;