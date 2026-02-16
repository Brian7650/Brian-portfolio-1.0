import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

            I’m <span className="purple">Brian Bartley</span>—a developer and email marketing specialist from <span className="purple">Brampton, 
            Canada</span>, building thoughtful, creative, and user‑focused digital experiences one caffeine‑powered idea at a time.
            <br/>
            <br />
              I’ve always been drawn to the artistic side of tech. Whether I’m designing an email campaign or crafting a frontend interface, 
              I love working with color, typography, layout, and photography to create visuals that feel intentional and engaging. Finding 
              the right image, pairing the right fonts, and shaping a clean, functional design is where my creativity really comes alive.
            
               <br />
              <br />
                On the development side, I enjoy building with Shopify, Express.js, and MongoDB to create secure, reliable, and easy‑to‑use 
                applications. I’m meticulous about forms, authentication, and data flow—making sure everything works smoothly behind the scenes. 
                I also like adding unique features through APIs to give each project something special. 

            <br />
            <br />
                What drives me most is the blend of creativity and innovation in this field. There’s always something new to learn, something new 
                to build, and endless room to push ideas further. For me, the sky really is the limit.

            <br />

          </p>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
