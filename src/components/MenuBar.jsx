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
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="intro.jsx">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Contact.jsx">Contact</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;
