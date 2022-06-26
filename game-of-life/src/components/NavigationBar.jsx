import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class NavigationBar extends Component {
  state = {};
  render() {
    const { links } = this.props;
    return (
      <Navbar className="navigation-bar" bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">Game of Life Simulator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {links.map((link) => (
                <Nav.Link
                  key={link.id}
                  href={link.url}
                  target={link.openInNewTab ? "_blank" : ""}
                >
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon className="m-2" icon={link.icon} />
                    {link.page}
                  </div>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
