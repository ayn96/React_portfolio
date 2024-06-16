import "../css/Skills.css" 
import Skillscompo from "../Components/Skillscompo";
import { Col, Row} from "react-bootstrap";

const skills ={
  f_langs: ["HTML", "CSS", "JavaScript"],
  b_langs: ["PHP", "Python"],
  f_frame: ["JQuery","React","Bootstrap"],
  b_frame: ["Django"],
  others: ["Git","MySQL","Figma"]
}

export default function Skills(props) {
  return (
    <>
      <Row className="skills justify-content-evenly align-items-center p-5">
        <Col lg={3} sm={10} className="text-center">
          <h2>Front End</h2>
          <Skillscompo title="Language" skills={skills.f_langs} icons={props.icons} />
          <Skillscompo title="Framework" skills={skills.f_frame} icons={props.icons} />
        </Col>
        <Col lg={3} sm={10} className="text-center">
          <h2>Back End</h2>
          <Skillscompo title="Language" skills={skills.b_langs} icons={props.icons} />
          <Skillscompo title="Framework" skills={skills.b_frame} icons={props.icons} />
        </Col>
        <Col lg={3} sm={10} className="text-center">
          <h2>Others</h2>
          <Skillscompo title="Other Skills" skills={skills.others} icons={props.icons} />
        </Col>
      </Row>
    </>
  );
}
