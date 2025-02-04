import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";

const Pin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={item.img} alt="" />

          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <spam>{item.bedroom} bedroom</spam>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
