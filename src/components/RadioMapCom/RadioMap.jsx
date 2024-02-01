/* The code provided is a React component called `RadioMap` that displays a map with markers clustered
together. It uses the `react-leaflet` library to render the map and markers. */
/**
 * The `MarkerCluster` component is a React component that displays a cluster of markers on a map and
 * updates the markers when the map is moved.
 * @returns The MarkerCluster component is returning null.
 */
import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import placeholderIcon from "../../assets/icons/placeholder.png";
import { Icon, divIcon } from "leaflet";
import axios from "axios";
import './radiomap.css'


const customIcon = new Icon({
  iconUrl: placeholderIcon,
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: [33, 33],
  });
};

const RadioMap = () => {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://de1.api.radio-browser.info/json/stations/search", {
        params: {
          has_geo_info: true,
          limit: 500,
          hidebroken: true,
        },
      })
      .then((response) => {
        setStations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <MapContainer
      center={[48.8566, 2.3522]}
      zoom={3}
      style={{ width: "100%", height: "100vh" }}
    >
      {/* OPEN STREET MAP TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {stations.map((station) => (
          <Marker
            key={station.stationuuid}
            position={[station.geo_lat, station.geo_long]}
            icon={customIcon}
          >
            <Popup>{station.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default RadioMap;
