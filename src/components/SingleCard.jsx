import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const SingleCard = ({ progetto, setModalShow, setIdProgetto }) => {

  return (
    <Card className="h-100 card ">
      <Card.Img variant="top" src={progetto.bg} />
      <Card.Body>
        <Card.Title>{progetto.title}</Card.Title>
        <Card.Text>
          {progetto.summary}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Linguaggio : {progetto.linguage}</ListGroup.Item>
        {progetto.featuring && (
          <ListGroup.Item>
            Collaboratori :{" "}
            {progetto.featuring.map((collaboratore) => (
              <a key={collaboratore.name} href={collaboratore.link} rel="noreferrer" target="_blank">
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
              }}
            >
              Dettagli
            </Button>
          </Col>
        </Row>
        <div className="d-flex justify-content-between"></div>
      </Card.Footer>
    </Card>
  );
};

export default SingleCard;
