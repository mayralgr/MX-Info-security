import { useState } from "react";
import Sidebar from "../components/SideBar/SideBar";
import information from "../resources/info/infoDelitos";

const DelitosPage = () => {
const [currentDelitoInfo, setCurrentDelitoInfo] = useState({});
  const handleClick = (e) => {
    const target = e.target;
    const id = target.id;
    const stateInfo = information[id];
    console.log(stateInfo);
    setCurrentDelitoInfo(stateInfo);
  }

  return (
    <div className="info" style={{ width: "100%" }}>
        <h1>Ciber delitos en México</h1>
        <div className="delitos-table" id="delitos-table">
            <Sidebar
                delitos={information}
            />
        </div>
    </div>
  );
}

export default DelitosPage;
