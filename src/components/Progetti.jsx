import { useEffect } from "react";
import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import progetti from "../data/progetti";
import ModalProgetto from "./ModalProgetto";
import SingleCard from "./SingleCard";

const Progetti = () => {
  const [modalShow, setModalShow] = useState(false);
  const [idProgetto, setIdProgetto] = useState("");
  const [valore, setValore] = useState("0");
  const [progettiArray, setProgettiArray] = useState(progetti);

  useEffect(() => {
    if (valore === "0") {
      setProgettiArray(progetti);
    } else {
      let temp = progetti.filter((progetto) => progetto.linguage === valore);
      setProgettiArray(temp);
    }
  }, [valore]);

  console.log(progetti);
  return (
    <div className="  m-auto">
      <div className="  align-items-center mb-5 ">
        <div>
          {" "}
          <h2>- Progetti -</h2>
        </div>
        <div className="w-25 float ">
          <label className="text-start" htmlFor="select">
            Filtra per linguaggio :
          </label>
          <Form.Select
            size="sm"
            id="select"
            aria-label="Default select example"
            onChange={(e) => {
              setValore(e.target.value);
            }}
          >
            <option value="0">Tutti i linguaggi</option>
            <option value="JavaScript">JavaScript</option>
            <option value="TypeScript">TypeScript</option>
            <option value="Angular">Angular</option>
            <option value="jQuery">jQuery</option>
            <option value="React">React</option>
          </Form.Select>
        </div>
      </div>

      <Row xs={1} md={4}>
        {progettiArray.map((progetto) => (
          <Col key={progetto.id} className="mb-4">
            <SingleCard
              setModalShow={setModalShow}
              setIdProgetto={setIdProgetto}
              progetto={progetto}
            />
          </Col>
        ))}
        <ModalProgetto
          progetti={progetti}
          idProgetto={idProgetto}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Row>
    </div>
  );
};

export default Progetti;
