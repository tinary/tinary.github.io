import React, { Component } from 'react';
import {
  Collapse, Navbar, NavbarToggler,
  Nav, NavItem, NavLink
} from 'reactstrap';

class MenuBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar dark fixed="top" className="bg-primary" expand="sm">
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <a className="nav-link" href="#Intro">Home</a>
            </NavItem>
            <NavItem>
                <a className="nav-link" href="#Timeline">About</a>
            </NavItem>
            <NavItem>
                <a className="nav-link" href="#Contact">Contact</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;
