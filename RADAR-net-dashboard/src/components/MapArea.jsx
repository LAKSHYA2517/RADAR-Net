import React from "react";
import RoutePlanner from "./FloatingWidgets";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const RouteMap = ({ geojsonData, setGeojsonData , visibleFloatingWidget, setVisibleFloatingWidget}) => {
  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      {/* 🔥 Route Planner Floating UI */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        {visibleFloatingWidget &&<RoutePlanner setGeojsonData={setGeojsonData} />}
      </div>

      {/* Show default map when no route data */}
      {!geojsonData ? (
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={5}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      ) : !geojsonData.features || geojsonData.features.length === 0 ? (
        // Show error when no route found
        <>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              background: "white",
              padding: "20px 30px",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              textAlign: "center",
              color: "#1f2937",
              border: "1px solid #e5e7eb"
            }}
          >
            <div style={{ fontSize: "48px", marginBottom: "10px" }}>⚠️</div>
            <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "5px" }}>
              No Route Found
            </div>
            <div style={{ fontSize: "14px", color: "#666" }}>
              Unable to find a route between the selected locations
            </div>
          </div>
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>
        </>
      ) : (
        // Show route map when data exists
        (() => {
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
            <>
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
                  boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                  fontWeight: "bold",
                  color: status === "flooded" ? "#dc2626" : "#059669",
                  border: status === "flooded" ? "2px solid #fecaca" : "2px solid #d1fae5",
                  backgroundColor: status === "flooded" ? "#fef2f2" : "#f0fdf4"
                }}
              >
                {status === "flooded" ? "🔴 Flood Risk" : "🟢 Safe Route"}
              </div>

              <MapContainer
                center={center}
                zoom={13}
                style={{ height: "100%", width: "100%" }}
                key={JSON.stringify(geojsonData)} // Force remount on new data
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
            </>
          );
        })()
      )}
    </div>
  );
};

export default RouteMap;