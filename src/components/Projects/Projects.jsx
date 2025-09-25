import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import work1 from "../../assets/Projects/work1.jpg";
import work2 from "../../assets/Projects/work2.jpg";
import work3 from "../../assets/Projects/work3.webp";
import work4 from "../../assets/Projects/work4.webp";
import work5 from "../../assets/Projects/work5.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
           
           {/* e-commerce */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={work1}
              isBlog={false}
              title="E-commerce Application"
              description="Created with Vite.js, React.js, Stripe, Firestore, SASS and Redux Saga. This is a fully functional e-commerce application. It includes
                          features such as product listings, shopping cart functionality, and user authentication."
              ghLink="https://github.com/Brian7650/jays-clothing"
              demoLink="https://jaysclothing.netlify.app/"
            />
          </Col>

           {/* social blog app */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={work2}
              isBlog={false}
              title="Social-Blog App"
              description="Put together a MERN stack application that allows users to create, read, update, and delete posts as an Administrator. 
              Regular users can create their own account, read posts, and comment on them."
              ghLink="https://github.com/Brian7650/zanoah-fullstack"
              demoLink="https://zanoah-fullstack.onrender.com/"
            />
          </Col>

           {/* restaurants */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={work4}
              isBlog={false}
              title="Restaurant Application"
              description="Restaurant web application built with React, Bootstrap, jQuery, different animations dependencies and other React packages."
              ghLink="https://github.com/Brian7650/maxwell-grills"
              demoLink="https://maxwell-grills.onrender.com/"              
            />
          </Col>

           {/* Face Scan App */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={work3}
              isBlog={false}
              title="Face Detection Application"
              description="Created a website with React for the front-end. Use PostgreSQL and Express.JS for the back-end.
              PostgreSQL was used to create a SQL so the application can store Username, an Email and hash passwords securely.
              Crafted a form with a sign in, register and logout navigator. Then used an email and password input to utilize the website"
              ghLink="https://github.com/Brian7650/Face-App-Project-Front"
              demoLink="https://face-projectfront.onrender.com/"              
            />
          </Col>

          {/* Email and Landing Page Portfolio */}
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={work5}
              isBlog={false}
              title="Email and Landing Page Portfolio"
              description="HTML Email Campaigns and Landing Pages created with HTML5, CSS3, JavaScript Bootstrap, Mailchimp. Used email on Acid
              to test the email templates across different email clients and devices.
              This project showcases my skills in creating responsive and visually appealing email templates and landing pages."
              ghLink="https://brian7650.github.io/brian-portfolio-1.1/"
              // demoLink="https://brian7650.github.io/brian-portfolio-1.1/"              
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
