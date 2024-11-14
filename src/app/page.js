"use client";
import Map from "./components/map";
import MapWithPolygon from "./components/mapWithPolygon";

const samplePoints = [
  {
    lat: 38.9072,
    lng: -77.0369,
    name: "Muhsinah",
    description: "Jazz-influenced hip hop artist playing at the Black Cat.",
  },
  { lat: 38.8951, lng: -77.0364, name: "The Event Spot", description: "An exciting event happening here." },
];

export default function Home() {
  return (
    <div className="">
      <Map points={samplePoints} />
      <MapWithPolygon />
    </div>
  );
}
