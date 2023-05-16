import React, { useState } from "react";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

import MultiActionAreaCard from "./MultiActionAreaCard";
function Home() {
  return (
    // <div>
    //   <div className="card-container">
    //     <MultiActionAreaCard>newcard</MultiActionAreaCard>
    //   </div>
    //   <div className="project-info">
    //     <h2>About this project</h2>
    //     <p>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
    //       tincidunt felis eu lorem rutrum commodo. Proin lobortis massa et urna
    //       congue, vel scelerisque metus finibus. Sed consectetur pulvinar dui,
    //       eget pellentesque tellus blandit ac. Integer rhoncus metus sed sapien
    //       interdum, a vestibulum tortor pretium.
    //     </p>
    //     <p>
    //       In hac habitasse platea dictumst. Sed blandit leo et mauris lacinia,
    //       at interdum arcu elementum. Fusce non lacus non metus bibendum
    //       vestibulum. Nunc malesuada, quam vel auctor sollicitudin, nunc velit
    //       sagittis nibh, non faucibus lorem odio ut urna. Nullam bibendum est
    //       vitae lectus elementum, in malesuada arcu faucibus.
    //     </p>
    //   </div>
    // </div>
    <div>
      <Container>
        <Row className="mt-5">
          <Col className="welcome">
            <h1>Welcome to TransientC</h1>
            <p>
              This project is under development and aims to provide users with a
              platform to perform transient calculations for dynamical systems.
            </p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="card-container">
              <MultiActionAreaCard>newcard</MultiActionAreaCard>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
