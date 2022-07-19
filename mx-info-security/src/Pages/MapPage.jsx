import { useState } from "react";
import "../App.css";
import Dependencia from "../components/Dependencia/Dependencia";
import Map from "../components/Map/Map";
import information from "../resources/info/infoStates";

const MapPage = () => {
  const [currentStateInfo, setcurrentStateInfo] = useState({});
  const handleClick = (e) => {
    if (!e.target.id) {
      return;
    }
    const target = e.target;
    const id = target.id;
    const stateInfo = information[id];
    setcurrentStateInfo(stateInfo);
  };

  return (
    <div className="map" style={{ width: "100%" }}>
      <Map onClick={handleClick} />
      {Object.keys(currentStateInfo).length > 0 && (
        <Dependencia stateInfo={currentStateInfo} />
      )}
    </div>
  );
};

export default MapPage;
