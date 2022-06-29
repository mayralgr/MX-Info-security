import React, { SyntheticEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import MexicoMap from "./resources/images/states/mapchart2.svg";

const App = () => {

  const handleClick = (e: any) => {
    const target = e.target;
    debugger;
  }
  return (
    <div className="App" onClick={(e) => handleClick(e)} style={{ width: "100%" }}>
      {/* let state = document.getElementById("map").getSVGDocument().getElementById("MX-BCN")
undefined
state.style.fill = "blue"
'blue' */}
      <embed id="map" onClick={(e) => handleClick(e)}  style={{ width: "100%" }} src={MexicoMap} />
    </div>
  );
}

export default App;
