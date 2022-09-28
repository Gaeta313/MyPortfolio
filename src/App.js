
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import { Col, Row } from "react-bootstrap";
import MainPage from "./components/MainPage";
import Presentazione from "./components/Presentazione";
import MyNav from "./components/MyNav";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="sfondo">
          <Row xs={1} md={2}>
            <Col className="relative" md={3}>
              <SideBar /> 
            </Col>
            <Col md={9} >
              <MyNav />
              <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/presentazione' element={<Presentazione />} />
                
              </Routes>
            </Col>
          </Row>
        </div>
         
      </div>
    </BrowserRouter>
  );
}

export default App;
