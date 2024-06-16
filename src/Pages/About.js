import React from "react";
import "../css/About.css"
import {Row, Button} from "react-bootstrap";

const education = [
  {
    when: "Feb 2016 - Jul 2016",
    category: "Education",
    title: "Hawaii University at Manoa",
    description:"English Language Program",
  },
  {
    when: "Apr 2015 - Mar 2019",
    category: "Education",
    title: "Yasuda Women's University",
    description: "International Tourism and Business Department",
  },
  {
    when: "Apr 2019 - Jun 2022",
    category: "Work",
    title: "Kinki Nippon Tourist",
    description: "International Tourism and Business Department",
  },
  {
    when: "Oct 2023 - Apr 2024",
    category: "Education",
    title: "Tamwood International College",
    description:"Web Development Course",
  },
];

export default function About() {
  return (
    <>
      <Row className="about text-center">
        {/* about me */}
        <div className="me p-5">
          <h3 className="p-5">Hello!<br/>I'm Web Developer</h3>
          <h1 className="display-1">
            <span>A</span>yana <span>K</span>itasuga
          </h1>
          <p className="p-5">I'm from Hiroshima, Japan.<br />I moved to Vancouver in 2022 and studied web development at the college in Vancouver.
          </p>
          <div className="resume p-5">
            <h3 className="p-4">Resume</h3>
            <p>You can download my resume as PDF file.</p>
            <Button className="p-2 m-2">EN</Button>
            <Button className="p-2 m-2">JP</Button>
          </div>

        </div>
        {/* history */}
        <div className="history d-flex align-items-center flex-column ">
          <h3 className="p-5">My History</h3>
          <div>
          {education.map((item, idx) => (
              <div className="mb-5 d-flex" key={idx}>
                <p className="text-end">{item.when}</p>
                <p className="category mx-5 text-center">{item.category}</p>
                <div className="ml-5 flex-grow-1">
                  <h5 className="title">{item.title}</h5>
                  <p>{item.description}</p>
                </div>
                <div></div>
              </div>
          ))}
          </div>
        </div>
      </Row>
    </>
  );
}