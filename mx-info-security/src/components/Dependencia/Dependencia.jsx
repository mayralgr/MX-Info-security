
import Card from 'react-bootstrap/Card';
import { AiFillFacebook, AiFillTwitterCircle, AiFillMail, AiOutlineWhatsApp, AiFillPhone } from "react-icons/ai";

const Dependencia = ({stateInfo}) => {
  return (
    <>
    <Card style={{ width: '18rem',     float: "right" }}>
      <Card.Body>
        <Card.Title>{stateInfo.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Dependencias:</Card.Subtitle>
        <Card.Text>
        {stateInfo.dependencias.map((dependencia) => {
                return (
                  <div key={dependencia.nombre}>
                    <h6>{dependencia.nombre}</h6>
                    {dependencia.pagina && (
                      <a href={dependencia.pagina}>Página web</a>
                    )}<br/>
                    {dependencia.telefonos.length > 0 &&
                      dependencia.telefonos.map((telefono, index) => {
                        return (
                          <>
                            <a
                              target="_blank"
                              key={index}
                              href={
                                "tel:" +
                                  telefono.numero +
                                  "," +
                                  telefono.extension ?? ""
                              } rel="noreferrer"
                            >
                              Telefono <AiFillPhone/>
                            </a>
                            <br />
                          </>
                        );
                      })}
                    {dependencia.whatsapp && (
                      <>
                        <AiOutlineWhatsApp />
                        <a
                            target="_blank"
                            href={"https://wa.me/" + dependencia.whatsapp} rel="noreferrer">
                          Whatsapp
                        </a>
                        <br />
                      </>
                    )}

                    {dependencia.email && (
                      <>
                        <AiFillMail />
                        <a href={"mailto:" + dependencia.email}>Email</a>
                        <br />
                      </>
                    )}

                    {dependencia.facebook && (
                      <>
                        <AiFillFacebook />  
                        <a target="_blank" href={dependencia.facebook} rel="noreferrer">Facebook</a>
                        <br />
                      </>
                    )}

                    {dependencia.twitter && (
                      <>
                        <AiFillTwitterCircle />
                        <a target="_blank" href={dependencia.twitter} rel="noreferrer">Twitter</a>
                        <br />
                      </>
                    )}
                  </div>
                );
              })}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};

export default Dependencia;
