import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ progetto, setModalShow, setIdProgetto }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100 card ">
      <Card.Img variant="top" src={progetto.bg} />
      <Card.Body>
        <Card.Title>{progetto.title}</Card.Title>
        <Card.Text>
          <p>{progetto.summary}</p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Linguaggio : {progetto.linguage}</ListGroup.Item>
        {progetto.featuring && (
          <ListGroup.Item>
            Collaboratori :{" "}
            {progetto.featuring.map((collaboratore) => (
              <a href={collaboratore.link} rel="noreferrer" target="_blank">
                {" "}
                {collaboratore.name}
              </a>
            ))}
          </ListGroup.Item>
        )}
      </ListGroup>
      <Card.Footer>
        <Row>
          <Col >
            <Button
              variant="success"
              onClick={() => {
                setIdProgetto(progetto.id);
                setModalShow(true); //
                /*  if(progetto.link !== ""){

                        window.location =   progetto.link
                      } */
              }}
            >
              Dettagli
            </Button>
          </Col>
         {/*  <Col xs={6} sm={12} md={12} lg={6}>
            <Button variant="dark"> Repository</Button>
          </Col> */}
        </Row>
        <div className="d-flex justify-content-between"></div>
      </Card.Footer>
    </Card>
  );
};

export default SingleCard;
