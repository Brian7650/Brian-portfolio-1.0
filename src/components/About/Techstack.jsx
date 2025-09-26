import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiJavascript1, DiReact, DiCss3, DiGit, DiHtml5, DiPhotoshop, } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

   
      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPhotoshop />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>

    </Row>
  );
}

export default Techstack;