import { useState } from "react";
import "../App.css";
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
    console.log(stateInfo);
    setcurrentStateInfo(stateInfo);
  };

  return (
    <div className="map" style={{ width: "100%" }}>
      <Map onClick={handleClick} />
      <div className="info-container">
        {Object.keys(currentStateInfo).length > 0 && (
          <>
            <div className="info-header">
              <p>{currentStateInfo.name}</p>
            </div>
            <div className="info-body">
              Dependencias:
              {currentStateInfo.dependencias.map((dependencia) => {
                return (
                  <div key={dependencia.nombre}>
                    <h3>{dependencia.nombre}</h3>
                    {dependencia.pagina && (
                      <a href={dependencia.pagina}>Página web</a>
                    )}

                    {dependencia.telefonos.length > 0 &&
                      dependencia.telefonos.map((telefono, index) => {
                        return (
                          <>
                            <a
                              key={index}
                              href={
                                "tel:" +
                                  telefono.numero +
                                  "," +
                                  telefono.extension ?? ""
                              }
                            >
                              Telefono{" "}
                            </a>
                            <br />
                          </>
                        );
                      })}
                    {dependencia.whatsapp && (
                      <>
                        <a href={"https://wa.me/" + dependencia.whatsapp}>
                          Whatsapp
                        </a>
                        <br />
                      </>
                    )}

                    {dependencia.email && (
                      <>
                        <a href={"mailto:" + dependencia.email}>Email</a>
                        <br />
                      </>
                    )}

                    {dependencia.facebook && (
                      <>
                        <a href={dependencia.facebook}>Facebook</a>
                        <br />
                      </>
                    )}

                    {dependencia.twitter && (
                      <>
                        <a href={dependencia.twitter}>Twitter</a>
                        <br />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MapPage;
