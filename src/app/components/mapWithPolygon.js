import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import usStatesData from "../data/us-geo.json";

const getColor = (density) => {
  return density > 200
    ? "#800026"
    : density > 100
    ? "#BD0026"
    : density > 50
    ? "#E31A1C"
    : density > 20
    ? "#FC4E2A"
    : density > 10
    ? "#FD8D3C"
    : density > 5
    ? "#FEB24C"
    : density > 0
    ? "#FED976"
    : "#FFEDA0";
};

function MapWithPolygon() {
  const onEachFeature = (feature, layer) => {
    const { NAME, density } = feature.properties;
    if (!density) {
      feature.properties.density = Math.random() * 300;
    }

    console.log(feature.properties, "FP");

    layer.bindTooltip(`<strong>${NAME}</strong><br/>${feature.properties.density.toFixed(2)} people per square mile`, {
      permanent: false,
      direction: "auto",
    });

    layer.setStyle({
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: "white",
      dashArray: "3",
      fillOpacity: 0.7,
    });
  };

  return (
    <MapContainer
      center={[37.8, -96]}
      zoom={4}
      style={{ height: "800px", width: "80%", margin: "auto", marginTop: "20px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <GeoJSON data={usStatesData} onEachFeature={onEachFeature} />
    </MapContainer>
  );
}

export default MapWithPolygon;
