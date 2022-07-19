import Accordion from "react-bootstrap/Accordion";
import { useMenu } from "../../contexts/MenuContext";

const DelitosAccordion = ({ delitos }) => {
    const { state } = useMenu();
  return (
    <Accordion style={{width: state.open ? "85%" : "95%", float:"right"}} defaultActiveKey="0">
      {delitos.map((delito, index) => {
        return (
          <Accordion.Item key={delito.id} eventKey={index}>
            <Accordion.Header>{delito.name}</Accordion.Header>
            <Accordion.Body>
              {delito.descripcion.split("\n").map((str) => (
                <p>{str}</p>
              ))}
              <strong>Articulos relacionados</strong>
              <table style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Articulo</th>
                    <th>Legislacion</th>
                  </tr>
                </thead>
                <tbody>
                  {delito.articulos
                    .sort((a, b) => (b.legislacion > a.legislacion ? 1 : -1))
                    .map((articulo) => (
                      <tr key={articulo.id}>
                        <td>{articulo.articulo}</td>
                        <td>{articulo.legislacion}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <strong>Prevención</strong>
              {delito.prevencion.map((str) => (
                <p>{str}</p>
              ))}
              <p>Palabras clave</p>
              {delito.palabrasClave.map((str) => (
                <span>{str}</span>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default DelitosAccordion;
