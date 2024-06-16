import { ListGroup } from "react-bootstrap";

export default function Skillscompo({ title, skills, icons }) {
  return (
    <>
      <div className="group">
        <h4 className="pt-4">{title}</h4>
        <ListGroup horizontal className="mb-5 justify-content-center flex-wrap">
          {skills.map((item, idx) => (
            <ListGroup.Item key={idx} className="d-flex flex-column align-items-center">
              <div className="icon">{icons[item]}</div>
              {item}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </>
  );
}