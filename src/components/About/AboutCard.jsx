import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            Hi Everyone, I am <span className="purple">Brian Bartley </span>
            from <span className="purple"> Brampton, Canada.</span>
            <br />
            <br />
              an Email and Frontend Developer driven by a love for coding and a constant desire to grow in web, 
              email, and software development. I thrive on turning creative ideas into real-world solutions.
               <br />
              <br />
              I work well both independently and in teams, always aiming to deliver exceptional customer 
              service in every project.
            <br />
            <br />
              My frontend toolkit includes HTML5, CSS3, JavaScript, Bootstrap, Photoshop, and GitHub. 
              I value integrity, optimism, and a strong work ethic, and I’m eager to keep learning from 
              seasoned professionals in the field.

            <br />

          </p>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
