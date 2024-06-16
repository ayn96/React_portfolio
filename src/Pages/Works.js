import {Row, Col,CardBody,CardTitle,CardText,CardImg,ListGroup} from "react-bootstrap";
import Skillscompo from "../Components/Skillscompo";
import {FaGithub } from 'react-icons/fa';

const works = [
  {
    img : "res.png",
    title : "Restaurant Website",
    description : "It is a Restaurant website",
    langs : "HTML,CSS,JavaScript",
    url : "https://static-website-project-phi.vercel.app/",
    github: "https://static-website-project-phi.vercel.app/"
  },
  {
    img : "ec.png",
    title : "Travel Website",
    description : "It is a Travel website",
    langs : "HTML,CSS,JavaScript",
    url : "https://static-website-project-phi.vercel.app/",
    github: "https://static-website-project-phi.vercel.app/"
  }
]

export default function Works(props) {
  return (
    <>
      <Row className="works p-5">
        {works.map((item, idx) => (
          <Col lg={4} className="mb-5 p-4" key={idx}>
            <CardImg src={`${process.env.PUBLIC_URL}/img/${item.img}`} alt={item.title} />
            <CardBody className="p-3">
              <CardTitle className="text-center p-3">{item.title}</CardTitle>
              <CardText className="p-3">{item.description}</CardText>
              
              <Skillscompo skills={item.langs.split(',')} icons={props.icons} />
              
              <CardBody className="text-center mt-4">
                <a href={item.url} className="btn p-url px-3 mx-3">Check</a>
                <a href={item.github} className="github mx-3"><FaGithub /></a>
              </CardBody>
            </CardBody>
          </Col>
        ))}
      </Row>
    </>
  );
}
