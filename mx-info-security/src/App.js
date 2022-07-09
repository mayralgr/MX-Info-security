import React, { useState } from "react";
import "./App.css";
import Map from "./components/Map";
import information from "./resources/info/info";

const App = () => {
const [currentStateInfo, setcurrentStateInfo] = useState({});
  const handleClick = (e) => {
    debugger;
    const target = e.target;
    const id = target.id;
    console.log(id);
    const stateInfo = information[id];
    console.log(stateInfo);
    setcurrentStateInfo(stateInfo);
    debugger;
  }

  return (
    <div className="App" onClick={handleClick} style={{ width: "100%" }}>
      <Map />
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

export default App;
