import { Button, Col, Container, Row } from "react-bootstrap";
import Progetti from "./Progetti";

const MainPage = () => {
  return (
    <Container className="mainPage">
      {/* <div>
        <div className="my-5 w-75 m-auto presentazione">
        <Row>
        <Col xs={12}>
        <h2 className="mb-3">- Intro -</h2>
        </Col>
        </Row>
        <Row>
            <Col md={8}>
              <div className="text-start">
              <p>
              In questa pagina potrete trovare e visionare i miei progetti.
              </p>
              <p>
              In realtà ne state già visionando uno. Ho creato questo
              portfolio utilizzando React.
              </p>
              
              </div>
              </Col>
              <Col md={4}>
              <div className="m-auto" style={{ width: "80%" }}>
                <Button variant="dark">Repo Progetto</Button>
                <p>
                Cliccando sul bottone potrete visualizzarne il
                codice.
                </p>
                </div>
                </Col>
                </Row>
                </div>
              </div> */}

<div className="my-3"></div>
      <div>
        <Progetti />
      </div>

    </Container>
  );
};

export default MainPage;
