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
              I’m a Frontend and Email Marketing Developer with a strong passion for coding and a solid foundation in{" "}
              <b className="blue">HTML, CSS, and JavaScript</b>. I love bringing ideas to life through code—it’s incredibly
              rewarding to see a project evolve from concept to reality. I thrive both independently and in team settings,
              and I believe that delivering excellent customer service should always be a top priority.
            </p>

            <div className="home-about-body">
              <p>I have experience in:</p>
              <ul>
                <li>
                  Creating websites such as{" "}
                  <b className="blue">E-commerce Stores</b>,{" "}
                  <b className="blue">Landing Pages</b>, and{" "}
                  <b className="blue">About Pages</b>
                </li>
                <li>
                  Specializing in four key areas of Email Marketing:{" "}
                  <b className="blue">Segmentation</b>,{" "}
                  <b className="blue">Personalization</b>,{" "}
                  <b className="blue">Automation</b>, and{" "}
                  <b className="blue">Deliverability</b>
                </li>
                <li>
                  Building CRM platforms using{" "}
                  <b className="blue">HubSpot</b>,{" "}
                  <b className="blue">Salesforce</b>, and{" "}
                  <b className="blue">Mailchimp</b>
                </li>
                {/* <li>
                  Crafting software and video games with{" "}                  <b className="blue">Python</b> and{" "}
                  <b className="blue">C#</b>
                </li> */}
              </ul>
            </div>

            <p className="home-about-body">
              I'm currently freelancing—building e-commerce apps through hands-on projects while staying 
              current with email marketing and web technologies. Excited to collaborate with like-minded 
              pros and keep growing on this coding journey.
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
