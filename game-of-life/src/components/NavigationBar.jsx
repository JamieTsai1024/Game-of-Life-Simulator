import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

class NavigationBar extends Component {
  state = {};
  render() {
    const { links } = this.props;
    return (
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand href="#home">Game of Life Simulator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              {links.map((link) => (
                // {Object.entries(links).map(([key, link]) => (
                <Nav.Link
                  key={link.id}
                  href={link.url}
                  target={link.openInNewTab ? "_blank" : ""}
                >
                  {/* <i className="fa fa-fw fa-home"></i> */}
                  <div className="d-flex align-items-center">
                    {/*  justify-content-center is for horizontally centering */}
                    {/* <FontAwesomeIcon
                          className="m-2"
                          icon={solid("user-secret")}
                        /> */}
                    {/* <i className="fa-brands fa-github-square"></i> */}
                    {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
                    <FontAwesomeIcon className="m-2" icon={link.icon} />
                    {/* <FontAwesomeIcon className="m-2" icon={solid(link.icon)} /> */}
                    {/* <FontAwesomeIcon className="m-2" icon={link.icon => solid(link.icon)} /> */}

                    {/* className="m-2" */}
                    {link.page}
                  </div>
                </Nav.Link>
              ))}
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      // From Bootstrap reference:
      // <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <a class="navbar-brand" href="#">
      //     Navbar
      //   </a>
      //   <button
      //     class="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarSupportedContent"
      //     aria-controls="navbarSupportedContent"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span class="navbar-toggler-icon"></span>
      //   </button>

      //   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      //     <ul class="navbar-nav mr-auto">
      //       <li class="nav-item active">
      //         <a class="nav-link" href="#">
      //           Home <span class="sr-only">(current)</span>
      //         </a>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="#">
      //           Link
      //         </a>
      //       </li>
      //       <li class="nav-item dropdown">
      //         <a
      //           class="nav-link dropdown-toggle"
      //           href="#"
      //           id="navbarDropdown"
      //           role="button"
      //           data-toggle="dropdown"
      //           aria-haspopup="true"
      //           aria-expanded="false"
      //         >
      //           Dropdown
      //         </a>
      //         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
      //           <a class="dropdown-item" href="#">
      //             Action
      //           </a>
      //           <a class="dropdown-item" href="#">
      //             Another action
      //           </a>
      //           <div class="dropdown-divider"></div>
      //           <a class="dropdown-item" href="#">
      //             Something else here
      //           </a>
      //         </div>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link disabled" href="#">
      //           Disabled
      //         </a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    );
  }
}

export default NavigationBar;
