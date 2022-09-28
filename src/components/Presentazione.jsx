import { Container} from "react-bootstrap";
import Certificazioni from "./Certificazioni";
import HardSkills from "./HardSkills";
import Profilo from "./Profilo";

const Presentazione = () => {
  return (
    <div className="myPresentazione">
      <div className="my-3">c</div>
      <Container className="w-75">
        <Profilo />
        <Certificazioni />
        <HardSkills />
      </Container>
    </div>
  );
};

export default Presentazione;
