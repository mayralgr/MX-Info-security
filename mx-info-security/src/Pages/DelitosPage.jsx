import DelitosAccordion from "../components/DelitosAcordion/DelitosAcordion";
import information from "../resources/info/infoDelitos";

const DelitosPage = () => {
  return (
    <div className="info" style={{ width: "100%" }}>
      <h1 style={{textAlign:"center"}} >Ciber delitos en México</h1>
      <DelitosAccordion
        delitos={information}
      />
    </div>
  );
};

export default DelitosPage;
