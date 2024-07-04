/* eslint-disable react/prop-types */

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import location from "../../assets/icons/pin.png";
import hostel from "../../assets/icons/hostel.png";
import { useCoordinates } from "../../hooks/use-coordinates";

let loveIcon = L.icon({
  iconUrl: location,
  iconRetinaUrl: location,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
});
let hostelIcon = L.icon({
  iconUrl: hostel,
  iconRetinaUrl: hostel,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
});

const HostelsMap = ({ hostels, selectedHostel, setSelectedHostel }) => {
  const mapRef = useRef();
  const routingControlRef = useRef(null);
  const { coordinates } = useCoordinates();

  const showRouting = (map) => {
    if (routingControlRef.current) {
      map.removeControl(routingControlRef.current);
    }

    if (coordinates && selectedHostel) {
      routingControlRef.current = L.Routing.control({
        waypoints: [
          L.latLng(coordinates[0], coordinates[1]),
          L.latLng(
            selectedHostel.coordinates[0],
            selectedHostel.coordinates[1]
          ),
        ],
        routeWhileDragging: true,
        show: true,
        createMarker: function () {
          return null;
        },
      }).addTo(map);
    }
  };

  const RenderRouting = () => {
    const map = useMap();
    showRouting(map);
    return null;
  };

  return (
    <div className="w-full">
      <MapContainer
        center={coordinates || [27.7172, 85.324]}
        zoom={14}
        className="w-full h-96 z-0"
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">PPV</a> contributors'
        />

        {coordinates && (
          <Marker position={coordinates} icon={loveIcon}>
            <Popup>HERE</Popup>
          </Marker>
        )}

        {hostels.map((hostel, index) => (
          <Marker
            key={index}
            icon={hostelIcon}
            position={hostel.coordinates}
            eventHandlers={{
              click: () => {
                setSelectedHostel(hostel);
              },
            }}
          >
            <Popup>{hostel.name}</Popup>
          </Marker>
        ))}

        <RenderRouting />
      </MapContainer>
    </div>
  );
};

export default HostelsMap;
