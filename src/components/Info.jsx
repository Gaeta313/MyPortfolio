import { Col, Row } from "react-bootstrap";

const Info = () => {
  return (
    <div className="my-5  m-auto presentazione">
      <Row>
        <Col xs={12}>
          <h2 className="mb-3">- Info -</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="text-start">
            <p>
              Poichè questo progetto utilizza un local server, non è possibile
              caricarlo direttamente su Vercel. Per provarlo è necessario : 
                          </p>
            <ol>
              <li>Scaricare la repository</li>
              <li>aprire la cartrella con visual studio code</li>
              <li>Aprire il terminale integrato e digitare:</li>
              <ol>
              <li>npm i</li>
              <li>npm run full-stack</li>

              </ol>
            </ol>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Info;
