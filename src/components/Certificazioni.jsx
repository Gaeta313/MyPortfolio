import { Col, Row } from "react-bootstrap";

const Certificazioni = () => {
  return (
    <div className="my-5  m-auto presentazione">
      <Row>
        <Col xs={12}>
          <h2 className="mb-3">- Certificazioni -</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
      <img src="/img/Gaetano-Giulio-Notarangelo.jpeg" width="100%" alt="" />
        </Col>

        <Col xs={12} md={6}>
      <div className="text-start ms-3">
           <h4>Front-End Developer</h4>
           <p>Rilasciato da Epicode School, un percorso formativo di 535 ore, dove ho appreso le principali skills lato front-end: </p>
           <ul>
               <li>HTML5</li>
               <li>CSS3</li>
               <li>Sass</li>
               <li>JavaScript</li>
               <li>TypeScript</li>
               <li>jQuery</li>
               <li>Angular</li>
           </ul>
      </div>
        </Col>
      </Row>
    </div>
  );
};

export default Certificazioni;
