import React from "react";
import RoutePlanner from "./FloatingWidgets";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  Marker,
  Popup
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const RouteMap = ({ geojsonData }) => {

  const defaultCenter = [20.5937, 78.9629];
  const zoomLevel = geojsonData ? 13 : 5;

  let start, end, distanceKm, status;

  if (geojsonData) {
    const feature = geojsonData.features[0];
    const coordinates = feature.geometry.coordinates;

    start = coordinates[0];
    end = coordinates[coordinates.length - 1];
    distanceKm = feature.properties.distance_km;
    status = feature.properties.status;
  }

  return (
    <div style={{ position: "relative", height: "600px", width: "100%" }}>

      {/* 🔥 Route Planner Floating UI */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
  <RoutePlanner />
</div>


      <MapContainer
        center={
          geojsonData
            ? [start[1], start[0]]
            : defaultCenter
        }
        zoom={zoomLevel}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {geojsonData && (
          <>
            <GeoJSON
              data={geojsonData}
              style={{
                color: status === "flooded" ? "red" : "green",
                weight: 5,
              }}
            />

            <Marker position={[start[1], start[0]]}>
              <Popup>Start Point</Popup>
            </Marker>

            <Marker position={[end[1], end[0]]}>
              <Popup>
                Distance: {distanceKm} km
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default RouteMap;
