import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Intro extends Component {
  render() {
    return (
      <Container className="pt-5">
        <Row className="m-5">
          <Col md="5" sm="12" className="p-2 p-md-3 p-lg-4">
            <img src="img/me/image1.jpg" className="rounded-circle img-thumbnail" alt="Me" />
          </Col>
          <Col md="7" sm="12" className="p-2 p-md-3 p-lg-4">
            <h1 className="mb-4">Hi, I'm Tina</h1>
            <h2 className="mb-4">A software developer in the making...</h2>
            <p className="">
              I'm currently a Programmer Analyst at <a href="https://www.christiedigital.com/en-us" target="_blank">Christie Digital. </a>
              I build the manufacture software application in our company, and develop in house tools and services within the organization.
            </p>
            <p className="">
              I'm constantly curious about how things work and like to solve problems to make things better and easier for user to use.
              My passion lies in many areas, I not only can programming but also have a good eye in design.
            </p>
          </Col>
        </Row>

        <hr />
      </Container>
    );
  }
}

export default Intro;
