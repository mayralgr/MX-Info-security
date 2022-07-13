/* eslint-disable no-unused-vars */
import { useState } from "react";
import DelitoCard from "../components/DelitoCard/DelitoCard";
import Sidebar from "../components/SideBar/SideBar";
import information from "../resources/info/infoDelitos";

const DelitosPage = () => {
  const [currentDelitoInfo, setCurrentDelitoInfo] = useState({});
  const handleClick = (e) => {
    const target = e.target;
    const id = target.id;
    const delitoInfo = information.filter((info) => info.id === id)[0];
    console.log(delitoInfo);
    setCurrentDelitoInfo(delitoInfo);
  };

  return (
    <div className="info" style={{ width: "100%" }}>
      <h1>Ciber delitos en México</h1>
      <div className="delitos-table" id="delitos-table">
        <Sidebar
          delitos={information}
          currentDelitoInfo={currentDelitoInfo}
          handleClick={handleClick}
        />
        {currentDelitoInfo?.id && (
          <DelitoCard delito={currentDelitoInfo} />
        )}
      </div>
    </div>
  );
};

export default DelitosPage;
