import PropTypes from "prop-types";
import { useMenu } from "../../contexts/MenuContext";
import DelitoCardWrapper from "./Styles/DelitoCardWrapper.styled";

const DelitoCard = ({ delito }) => {
  const { state } = useMenu();
  return (
    <DelitoCardWrapper open={state.open} id="delito-info">
      <h2>{delito.name}</h2>
      {delito.descripcion.split("\n").map(str => <p>{str}</p>)}
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
          .sort((a,b) => b.legislacion > a.legislacion ? 1 : -1)
          .map((articulo) => (
            <tr key={articulo.id}>
              <td>{articulo.articulo}</td>
              <td>{articulo.legislacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <strong>Prevención</strong>
      {delito.prevencion.map(str => <p>{str}</p>)}
      <p>Palabras clave</p>
      {delito.palabrasClave.map(str => <span>{str}</span>)}
    </DelitoCardWrapper>
  );
};

DelitoCard.propTypes = {
  delito: PropTypes.object.isRequired,
};

export default DelitoCard;
