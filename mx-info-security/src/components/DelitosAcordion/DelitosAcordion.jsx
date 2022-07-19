import Accordion from "react-bootstrap/Accordion";
import { useMenu } from "../../contexts/MenuContext";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';

const DelitosAccordion = ({ delitos }) => {
    const { state } = useMenu();
  return (
    <Accordion style={{width: state.open ? "85%" : "95%", float:"right"}} defaultActiveKey="0">
      {delitos.map((delito, index) => {
        return (
          <Accordion.Item key={delito.id} eventKey={index}>
            <Accordion.Header>{delito.name}</Accordion.Header>
            <Accordion.Body >
              {delito.descripcion.split("\n").map((str, index) => (
                <p key={index + delito.name} >{str}</p>
              ))}
              <strong>Artículos relacionados</strong>
              <Table bordered={true} hover={true} striped={true} variant="info" responsive style={{ width: "100%" }}>
                <thead>
                  <tr>
                    <th>Artículo</th>
                    <th>Legislación</th>
                  </tr>
                </thead>
                <tbody>
                  {delito.articulos
                    .sort((a, b) => (b.legislacion > a.legislacion ? 1 : -1))
                    .map((articulo, index) => (
                      <tr key={articulo.id + "art"+index}>
                        <td>{articulo.articulo}</td>
                        <td>{articulo.legislacion}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <ListGroup variant="flush">
              <ListGroup.Item style={{textAlign:"center"}}><strong>Prevenciones</strong></ListGroup.Item>
              {delito.prevencion.map((str, index) => (
                <ListGroup.Item key={delito.id + index}  >{str}</ListGroup.Item>
              ))}
              </ListGroup>
              <strong  style={{textAlign:"center"}}>Palabras clave</strong>
              <br/>
              {delito.palabrasClave.map((str, index) => (
                 <Badge key={delito.id+"cve"+index} pill bg="warning" text="dark">
                 {str}
               </Badge>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
};

export default DelitosAccordion;
