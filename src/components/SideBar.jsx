import { Col, Container, Row } from "react-bootstrap";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { HiCloudDownload } from "react-icons/hi";

const SideBar = () => {
  return (
    <Container fluid className="m-0">
      <div className="mySideBar">
      <div className="p-4"></div>
        <Container>
          <div className="fotoNome">
            <Row className="mb-5 rigaProfilo">
              <Col md={4} lg={6} className="m-auto">
                <div className="fotoProfilo">
                  <img
                    src="/img/WhatsApp Image 2022-06-09 at 16.19.51.jpeg"
                    width="100%"
                    alt="foto profilo"
                  />
                </div>
              </Col>
            </Row>
          <div className="titolo">
            <h3>Gaetano Notarangelo</h3>
            <h4>- Front-End Developer -</h4>
          </div>
          </div>
          <Row className="text-start mt-3">
            <Col xs={10} className="m-auto">
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-link my-2"
                href="https://www.linkedin.com/in/gaetano-giulio-notarangelo-796580241/"
              >
                <AiFillLinkedin /> Linkedin
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-link my-2"
                href="https://github.com/Gaeta313"
              >
                <AiFillGithub /> GithHub
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="nav-link my-2"
                href="./documents/Gaetano Giulio_Notarangelo_Curriculum_con_Portfolio.pdf"
              >
                <HiCloudDownload /> Download Curriculum
              </a>
            </Col>
          </Row>
          <Row className=" mt-3">
            <Col xs={10} className="m-auto text-start">
              <h4>- About Me -</h4>
              <p>
                Ciao, mi chiamo Gaetano è sono un appassionato di
                programmazione.
              </p>
              <p>
                {" "}
                Ho frequentato il corso Front-End di Epicode School, dove ho
                acquisto le principali skills del settore, fino ad arrivare ad
                Angular e React.
              </p>
              <p>
                Ecco a voi una presentazione di me stesso e dei miei lavori.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
};

export default SideBar;
