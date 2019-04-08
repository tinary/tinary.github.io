import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Intro extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function(event) {
      const textArray = ["I build technology.", "I develop web applications.",
      "I design beautiful things.", "I create user-friendly interface.",
      "I make things happen."];
      function typeWriter(text, i, fnCallback) {
        if (i < (text.length)) {
          document.querySelector("h5").innerHTML = text.substring(0, i + 1);
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 70);
        } else if (typeof fnCallback == 'function') {
          setTimeout(fnCallback, 800);
        }
      }
      function StartTextAnimation(i) {
        if (typeof textArray[i] == 'undefined') {
          setTimeout(function() {
            StartTextAnimation(0);
          }, 2000);
        }
        if (i < textArray[i].length) {
          typeWriter(textArray[i], 0, function() {
            StartTextAnimation(i + 1);
          });
        }
      }
      StartTextAnimation(0);
    });
  }

  render() {
    return (
      <Container id="Intro" className="pt-5">
        <Row className="p-5">
          <Col md="4" sm="12" className="p-2 p-md-3 p-lg-4">
            <img src="img/me/image1.jpg" className="rounded-circle img-thumbnail" alt="Me" />
          </Col>
          <Col md="8" sm="12" className="p-2 p-md-3 p-lg-4">
            <h1 className="mb-4">Hi, I'm Tina</h1>
            <h2 className="mb-4">A software developer in the making...</h2>
            <h5></h5>
          </Col>
        </Row>

        <hr />
      </Container>
    );
  }
}

export default Intro;
