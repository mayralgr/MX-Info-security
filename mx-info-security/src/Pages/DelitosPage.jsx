/* eslint-disable no-unused-vars */
import { useState } from "react";
import Sidebar from "../components/SideBar/SideBar";
import information from "../resources/info/infoDelitos";

const DelitosPage = () => {
const [currentDelitoInfo, setCurrentDelitoInfo] = useState({});
  const handleClick = (e) => {
    const target = e.target;
    const id = target.id;
    const delitoInfo = information.filter(info => info.id === id)[0];
    console.log(delitoInfo);
    setCurrentDelitoInfo(delitoInfo);
  }
  
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
            <div className="delito-info" > 
            {/* //60 y 75 width */}
                <h2>{currentDelitoInfo.name}</h2>
                <p>{currentDelitoInfo.descripcion}</p>
                <p>{currentDelitoInfo.caracteristicas}</p>
                <strong>Articulos relacionados</strong>
                <table style={{width: "100%"}}>
                  <thead>
                    <tr>
                      <th>Articulo</th>
                      <th>Legislacion</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentDelitoInfo.articulos.map(articulo => (
                      <tr key={articulo.id}>
                        <td>{articulo.articulo}</td>
                        <td>{articulo.legislacion}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <strong>Prevención</strong>
                <p>{currentDelitoInfo.prevencion}</p>
                <p>Palabras clave</p>
                {currentDelitoInfo.palabrasClave}
            </div>)}
        </div>
    </div>
  );
}

export default DelitosPage;
