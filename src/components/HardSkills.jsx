import { Col, Row } from "react-bootstrap"

const HardSkills = () => {
    return( 
        <div className="presentazione mb-5">
        <Row>
          <Col xs={12}>
            <h2 className="mb-3">- Hard Skills -</h2>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="100%"
                  height="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">HTML 5</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="70%"
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">CSS 3</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="100%"
                  height="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">Sass</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">Bootstrap</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="100%"
                  height="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">JavaScript</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">TypeScript</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} className="align-self-center">
            <Row className="align-items-center">
              <Col xs={4} >
                <img
                  width="100%"
                  height="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/1048px-JQuery-Logo.svg.png"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">jQuery</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1024px-Angular_full_color_logo.svg.png"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">Angular</h3>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6} className="align-self-center">
            <Row className="align-items-center">
              <Col xs={4} >
                <img
                  width="100%"
                  height="100%"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">React</h3>
              </Col>
            </Row>
          </Col>
          <Col md={6}>
            <Row className="align-items-center">
              <Col xs={4}>
                <img
                  width="100%"
                  src="https://cdn.worldvectorlogo.com/logos/redux.svg"
                  alt="logo Css"
                />
              </Col>
              <Col xs={8}>
                <h3 className="ms-2 text-start ">Redux</h3>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>  
    )
}

export default HardSkills