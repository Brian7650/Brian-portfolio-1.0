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
              Email Developer with a deep passion for coding and a strong desire to continually expand my knowledge in Email, 
              Web and Software Development. The thrill of turning my creative ideas into tangible projects and presenting them 
              is a source of great satisfaction for me. I excel both in collaborative team environments and as a solitary worker, 
              and I firmly believe that customer service is the ultimate goal to achieve in any project.

            {/* I'm a passionate developer with an interest in both front-end and back-end technologies. 
            I love creating applications and engaging user experiences. */}
            <br />
            <br />
              I have experience with the frontend by using HTML5, CSS3, Javascrpt, Bootstrap, Photoshop and GitHub. I take pride in 
              my honesty, integrity, sense of humor, optimism, strong work ethic, and my ability to maintain a positive attitude with
               a smile, even when facing challenges. My ultimate goal is to gain more experience in this field through hard work and 
               by learning from experienced professionals in the industry.


           {/* Throughout my journey, I've developed a wide range of applications, including e-commerce websites,
            blogs, landing pages, and email campaigns. I also have hands-on experience building Shopify-based 
            e-commerce stores, designing landing pages for email marketing, and crafting targeted email campaigns
             to boost engagement and drive sales. I'm excited to bring this blend of technical expertise and 
             creative energy to a dynamic, forward-thinking team. */}
            <br />

          </p>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
