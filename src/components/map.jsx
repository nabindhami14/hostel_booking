import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

import { useEffect, useRef, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import location from "../assets/icons/pin.png";
import hostel from "../assets/icons/hostel.png";

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

const hostels = [
  {
    name: "Mohan Solutions",
    coordinates: [27.7172, 85.324],
  },
  {
    name: "Biraj Kalanki",
    coordinates: [27.6931052, 85.28065390000006],
  },
  {
    name: "Aayush Solutions",
    coordinates: [27, 85],
  },
  {
    name: "Raman Solutions",
    coordinates: [27.4, 85.19],
  },
];

// eslint-disable-next-line react/prop-types
const Map = () => {
  const mapRef = useRef();
  const [userLocation, setUserLocation] = useState(null);
  const [selectedHostel, setSelectedHostel] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const showRouting = (map) => {
    if (userLocation && selectedHostel) {
      L.Routing.control({
        waypoints: [
          L.latLng(userLocation[0], userLocation[1]),
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
    <div className="w-full h-full my-10 p-10">
      <MapContainer
        center={[27.7172, 85.324]}
        zoom={12}
        className="w-full h-96"
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">PPV</a> contributors'
        />

        {userLocation && (
          <Marker position={userLocation} icon={loveIcon}>
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

      {selectedHostel && (
        <div className="p-10 bg-red-400">
          <h2>Selected Hostel: {selectedHostel.name}</h2>
        </div>
      )}
    </div>
  );
};

export default Map;
