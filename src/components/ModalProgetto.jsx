import Carousel from "better-react-carousel";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ModalProgetto = (props) => {
  const [progetto, setProgetto] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const getsource = (linguage) => {
    switch (linguage) {
      case "JavaScript":
        return "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg";
      case "TypeScript":
        return "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg";
      case "Angular":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png";
      case "jQuery":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/1048px-JQuery-Logo.svg.png";
      default:
        return "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg";
    }
  };

  useEffect(() => {
    let progettoT = props.progetti.filter(
      (progetto) => progetto.id === props.idProgetto
    );
    if (progettoT[0]) {
      if (progettoT[0] !== progetto) {
        console.log(progettoT);
        setProgetto(progettoT[0]);
        if (image !== progettoT[0].bg) {
          setImage(progettoT[0].bg);
          console.log("fatto");
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.idProgetto, image]);

  return (
    <div>
      {progetto && (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <div className="w-10 me-2">
              <img
                width="100%"
                src={getsource(progetto.linguage)}
                alt="logoLinguaggio"
              />
            </div>
            <Modal.Title id="contained-modal-title-vcenter">
              {progetto.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center blocco">
            <div className="w-75 m-auto mb-4 border">
              <img src={image} width="100%" alt="immagine" />
            </div>
            <div>
              {progetto.images &&
                (progetto.images.length > 4 ? (
                  <Carousel cols={4} rows={1} loop>
                    {progetto.images.map((immagine, i) => (
                      <Carousel.Item key={i}>
                        <div className="w-50 carousel m-auto ">
                          <img
                            width="100%"
                            src={immagine}
                            alt="img"
                            onClick={() => {
                              setImage(immagine);
                            }}
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <Carousel cols={4} rows={1} arrowLeft=" " arrowRight=" " loop>
                    {progetto.images.map((immagine, i) => (
                      <Carousel.Item key={i}>
                        <div className="w-50 carousel m-auto ">
                          <img
                            width="100%"
                            alt="img"
                            src={immagine}
                            onClick={() => {
                              setImage(immagine);
                            }}
                          />
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ))}
             
              <h4 className="my-4">{progetto.summary}</h4>
              <div className="mt-4" >
                <p>{progetto.description}</p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-between">
            <div >
              {progetto.link !== "" && progetto.link !== "/info" && (
                <Button
                  className="me-2 provalo"
                  variant="success"
                  onClick={() => {
                    window.open(progetto.link, "_blank");
                  }}
                >
                  Provalo
                </Button>
              )}
              {
                progetto.link === "/info" &&
                <Button
                  className="me-2 provalo"
                  variant="success"
                  onClick={() => {
                    navigate(progetto.link);
                  }}
                >
                  Provalo
                </Button>
              
              }
              {progetto.video && (
                <Button
                  className="me-2 provalo"
                  variant="dark"
                  onClick={() => {
                    window.location = progetto.video;
                  }}
                >
                  Video
                </Button>
              )}
              <Button variant="dark" onClick={() => {
                    window.open(progetto.repository, "_blank");
                  }}>Repository</Button>
            </div>
            <Button variant="dark" onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default ModalProgetto;
