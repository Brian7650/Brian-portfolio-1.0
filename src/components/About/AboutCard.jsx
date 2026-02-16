import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

            Hi, I’m <span className="purple">Brian Bartley</span>—your friendly neighbourhood developer from <span className="purple">Brampton, 
            Canada</span>, building cool things on the web one caffeine-fueled idea at a time.
            <br/>
            <br />
              I enjoy both Email Marketing and Frontend Development for numerous reasons from the design aspect because I have an artistic side
              to me. Finding the matching colors or correct fonts and just testing for correct place and functions for Email Campaigns and Website. 
              Also like the photography side because I like to find the right photos for the projects I work on.
            
               <br />
              <br />
                For  using Shopify or Express.js with MongoDB for the backend. I try to putmy best to put a easy functional and excellent security practice. 
                Creating forms and testing logins and signups and making sure the data is being stored correctly. I also like to add a special feature to 
                the website or application by adding an API. 

            <br />
            <br />
                The creative and the innnovative part of trhes fields is what drives and excites me when building an application.
                The sky is the limits in what you can create.

              {/* My frontend toolkit includes HTML5, CSS3, JavaScript, React, Bootstrap, Photoshop, and Web design. 
              I value integrity, optimism, and a strong work ethic, and I’m eager to keep learning from 
              seasoned professionals in the field. */}

            <br />

          </p>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
