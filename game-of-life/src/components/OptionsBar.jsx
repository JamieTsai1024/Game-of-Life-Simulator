import React, { Component } from "react";
import CustomButton from "./CustomButton";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class OptionsBar extends Component {
  state = {};

  // styles = {
  //   .bottom-bar {

  //   }
  // };

  render() {
    const { start, reset, onStart, onReset, onNext } = this.props;
    const barStyle = { backgroundColor: "#1B5C41", height: "15%" };

    return (
      <Navbar
        expand="md"
        variant="light"
        style={barStyle}
        fixed="bottom"
        className="p-4"
      >
        {/* bg="dark" */}
        {/* bg="--bs-purple" 
        bottom-bar 
        style="background-color: rgb(95, 174, 31)"*/}
        <Container>
          {/* Container makes them spaced out */}
          {/* <Navbar.Brand href="#">Navbar</Navbar.Brand> */}

          <CustomButton
            variant="secondary"
            text="Reset"
            icon={solid("refresh")}
            showAlternate={!reset}
            alternateText="Clear"
            alternateIcon={solid("xmark")}
            onClickEvent={onReset}
          />
          <CustomButton
            variant="primary"
            text="Start"
            icon={solid("play")}
            showAlternate={!start}
            alternateText="Pause"
            alternateIcon={solid("pause")}
            onClickEvent={onStart}
          />
          <CustomButton
            variant="secondary"
            text="Next"
            icon={solid("angle-right")}
            onClickEvent={onNext}
          />
        </Container>
      </Navbar>
    );
  }
}

export default OptionsBar;
