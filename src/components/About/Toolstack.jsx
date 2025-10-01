import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiRender, SiNetlify } from "react-icons/si";
import { FaHubspot, FaSalesforce, FaMailchimp, FaShopify } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaShopify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaHubspot />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <FaSalesforce />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <FaMailchimp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>

      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRender />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
    </Row>
  );
}

export default Toolstack;