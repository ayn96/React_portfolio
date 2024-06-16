import {Row, Col} from "react-bootstrap";
import "../css/home.css"

export default function Home() {
  return(
    <>
      <Row className="home text-center vh-100">
        {/* left */}
        <Col className="left d-flex align-items-center justify-content-center col-6">
          <h1 className="display-3 typing-animation" >Web Developer</h1>
        </Col>
        {/* right */}
        <Col className="right d-flex align-items-center justify-content-center col-6">
          <h1 className="display-1"><span>A</span>yana<br/><span>K</span>itasuga</h1>
        </Col>
      </Row>
    </>
  )
}