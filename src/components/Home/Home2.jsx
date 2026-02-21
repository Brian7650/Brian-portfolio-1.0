import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../assets/developer2.svg";
import { AiFillGithub, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue">INTRODUCE</span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m a Web Developer and Email Marketing Specialist with a strong passion for coding and building 
              digital products that work. I’m skilled in{" "}
              <b className="blue">HTML, CSS, Javascript, Python, SQL & C#</b>. I love bringing ideas to life 
              through clean, functional code. Watching a project grow from concept to reality is rewarding. 
              I thrive both independently and in collaborative team environments, and I believe customer 
              service should always be at the heart of every digital experience.
            </p>

            <div className="home-about-body">
              <p>What I focus on:</p>
              <ul>
                <li>
                  Building CRM platforms using{" "}
                  <b className="blue">HubSpot</b>,{" "}
                  <b className="blue">Salesforce</b>, and{" "}
                  <b className="blue">Mailchimp.</b><br/>
                </li>   
                <br/>
                <li>
                  Creating modern websites such as{" "}
                  <b className="blue">E-commerce Stores</b>,{" "}
                  <b className="blue">Landing Pages</b>, and{" "}
                  <b className="blue">About Pages.</b><br/>
                </li>
                <br/>
                <li>
                  Specializing in four key areas of  <b className="blue">Email Marketing:</b>{" "}
                  <b className="blue">Segmentation</b>,{" "}
                  <b className="blue">Personalization</b>,{" "}
                  <b className="blue">Automation</b>, and{" "}
                  <b className="blue">Deliverability.</b><br/>
                </li>
                <br/>
                <li>
                  Building dynamic web products using{" "}
                  <b className="blue">React</b>{" "}
                  <b className="blue">JavaScript</b> and{" "}
                  <b className="blue">Bootstrap.</b>
                </li>     
                
                {/* <li>
                  Crafting software and video games with{" "}                  <b className="blue">Python</b> and{" "}
                  <b className="blue">C#</b>
                </li> */}
              </ul>
            </div>

            <p className="home-about-body">
              I’m currently freelancing—building e‑commerce applications through hands‑on projects while staying up 
              to date with the latest web technologies. I enjoy connecting with like‑minded professionals and 
              continuously leveling up on this coding journey. No matter the project, customer service and user
               experience always come first.
            </p>
          </Col>

          <Col md={4} style={{ paddingTop: 200, paddingLeft: "70px" }}>
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px", paddingTop: "1.2em" }}
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="blue">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Brian7650"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brian-bartley-1bb4ab267/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:bbartley719@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
