import { Button, Card, ListGroup } from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"
import { useNavigate } from "react-router-dom"

const SingleCard = ({progetto, setModalShow, setIdProgetto}) => {

  const navigate = useNavigate()

  

    return(
        <Card className="h-100  ">
            <Card.Img variant="top" src={progetto.bg} />
            <Card.Body>
              <Card.Title>{progetto.title}</Card.Title>
              <Card.Text>
                <p>{progetto.summary}</p>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
            <ListGroup.Item>Linguaggio : {progetto.linguage}</ListGroup.Item>
            </ListGroup>
            <Card.Footer>
               <div className="d-flex justify-content-between">
                    <Button variant="success" onClick={() =>{
                      setIdProgetto(progetto.id)
                      setModalShow(true); //
                     /*  if(progetto.link !== ""){

                        window.location =   progetto.link
                      } */
                    }}>Dettagli</Button>
                    <Button variant="dark"> Repository</Button>
               </div>
            </Card.Footer>
          </Card>
    )
}

export default SingleCard