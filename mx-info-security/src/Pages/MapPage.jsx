import { useState } from "react";
import "../App.css";
import Map from "../components/Map/Map";
import information from "../resources/info/infoStates";
const MapPage = () => {
const [currentStateInfo, setcurrentStateInfo] = useState({});
  const handleClick = (e) => {
    if(!e.target.id){return;}
    const target = e.target;
    const id = target.id;
    const stateInfo = information[id];
    console.log(stateInfo);
    setcurrentStateInfo(stateInfo);
  }

  return (
    <div className="map" style={{ width: "100%" }}>
      <Map
        onClick={handleClick}
      />
      <div className="info-container">
        <div className="info-header">
          {
            Object.keys(currentStateInfo).length > 0 && (
              <p>{currentStateInfo.name}</p>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default MapPage;
