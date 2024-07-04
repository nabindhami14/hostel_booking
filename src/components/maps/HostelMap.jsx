/* eslint-disable react/prop-types */

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";

import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

import location from "../../assets/icons/pin.png";
import hostelImg from "../../assets/icons/hostel.png";
import { useCoordinates } from "../../hooks/use-coordinates";

let loveIcon = L.icon({
  iconUrl: location,
  iconRetinaUrl: location,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
});
let hostelIcon = L.icon({
  iconUrl: hostelImg,
  iconRetinaUrl: hostelImg,
  iconAnchor: [5, 55],
  popupAnchor: [10, -44],
  iconSize: [55, 55],
});

const HostelMap = ({ hostel }) => {
  const { coordinates } = useCoordinates();

  const showRouting = (map) => {
    if (coordinates && hostel.coordinates) {
      L.Routing.control({
        waypoints: [
          L.latLng(coordinates[0], coordinates[1]),
          L.latLng(hostel.coordinates[0], hostel.coordinates[1]),
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
    <div className="w-full h-full my-10">
      <MapContainer
        center={hostel.coordinates}
        zoom={12}
        className="w-full h-96"
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

        <Marker icon={hostelIcon} position={hostel.coordinates}>
          <Popup>{hostel.name}</Popup>
        </Marker>

        <RenderRouting />
      </MapContainer>
    </div>
  );
};

export default HostelMap;
