import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Progetti from "./Progetti";

const MainPage = () => {

 
  return (
    <Container className="mainPage">

<div className="my-3"></div>
      <div>
        <Progetti />
      </div>

    </Container>
  );
};

export default MainPage;
