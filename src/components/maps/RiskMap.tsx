"use client";

import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import PriorityBadge from "@/components/common/PriorityBadge";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

export default function RiskMap({ data }: { data: any[] }) {
  return (
    <Map
      initialViewState={{
        latitude: 18.5204,
        longitude: 73.8567,
        zoom: 12,
      }}
      mapboxAccessToken={MAPBOX_TOKEN}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/light-v11"
    >
      {data.map((item) => (
        <Marker
          key={item.id}
          latitude={item.lat}
          longitude={item.lng}
        >
          <div className="cursor-pointer">
            <PriorityBadge level={item.priority} />
          </div>
        </Marker>
      ))}
    </Map>
  );
}
