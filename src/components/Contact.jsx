import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Contact extends Component {
  constructor(props) {
    super(props);

    this.social = [{
      name: 'LinkedIn',
      url: 'https://ca.linkedin.com/in/tinaywang',
      icon: 'fab fa-linkedin-in fa-4x'
    }, {
      name: 'Email',
      url: 'mailto:tinaywang17@gmail.com',
      icon: 'fas fa-envelope fa-4x'
    }, {
      name: 'GitHub',
      url: 'https://github.com/tinary',
      icon: 'fab fa-github fa-4x'
    }, {
      name: 'Behance',
      url: 'https://www.behance.net/tinarywang',
      icon: 'fab fa-behance fa-4x'
    }];
  }

  render() {
    return (
      <Container id="Contact" className="text-center p-5">
        <h1 className="m-3">Let's Chat</h1>
        <h2 className="m-3">Connect with me</h2>

        <Row className="m-5">
          {this.social.map(media => (
            <Col key={media.name} xs="6" sm="3">
              <a href={media.url} title={media.name} className="social-icon-link">
                <span className="social-icon-wrapper">
                  <i className={`${media.icon} social-icon`} />
                </span>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default Contact;
