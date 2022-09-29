import { Col, Row } from "react-bootstrap";

const Profilo = () => {
  return (
    <div className="my-5  m-auto presentazione">
      <Row>
        <Col xs={12}>
          <h2 className="mb-3">- Profilo Professionale -</h2>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <div className="text-start">
            <p>
              Io provengo da tutt'altro settore, ho lavorato per oltre 10 anni
              nel settore dell' hospitality, arrivando a ricoprire incarichi di
              grande responsabilità. Ho da sempre avuto una grande passione per
              il mondo della programmazione, e per la logica in generale e
              questo mi ha spinto a lasciare la mia precedente carriera per
              rimettermi in gioco.
            </p>
            <p>
              Ho frequentato il corso Front-End di Epicode School, un percorso
              formativo di oltre 600 ore, per avere i mezzi per trasformare la
              mia passione nel mio lavoro.
            </p>
            <p>
              Sono una persona molto curiosa, mi piace imparare ogni giorno
              qualcosa di nuovo. Sono pronto ad impegnare tutto me stesso per
              realizzare i miei progetti.
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="m-auto" style={{ width: "70%" }}>
            <img src="/img/20220609_1546322.jpg" width="100%" alt="foto" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Profilo;
