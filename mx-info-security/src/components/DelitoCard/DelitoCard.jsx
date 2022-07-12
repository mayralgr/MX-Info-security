import PropTypes from "prop-types";
import { useMenu } from "../../contexts/MenuContext";
import DelitoCardWrapper from "./Styles/DelitoCardWrapper.styled";

const DelitoCard = ({ delito }) => {
  const { state } = useMenu();
  return (
    <DelitoCardWrapper open={state.open} id="delito-info">
      <h2>{delito.name}</h2>
      <p>{delito.descripcion}</p>
      <p>{delito.caracteristicas}</p>
      <strong>Articulos relacionados</strong>
      <table style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Articulo</th>
            <th>Legislacion</th>
          </tr>
        </thead>
        <tbody>
          {delito.articulos.map((articulo) => (
            <tr key={articulo.id}>
              <td>{articulo.articulo}</td>
              <td>{articulo.legislacion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <strong>Prevención</strong>
      <p>{delito.prevencion}</p>
      <p>Palabras clave</p>
      {delito.palabrasClave}
    </DelitoCardWrapper>
  );
};

DelitoCard.propTypes = {
  delito: PropTypes.object.isRequired,
};

export default DelitoCard;
