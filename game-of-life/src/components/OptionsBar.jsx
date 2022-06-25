import React, { Component } from "react";
import CustomButton from "./CustomButton";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

class OptionsBar extends Component {
  state = {};

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
        <Container>
          {/* Container makes them spaced out */}
          <CustomButton
            variant="secondary"
            text="Reset"
            disable={false}
            icon={solid("refresh")}
            showAlternate={!reset}
            alternateText="Clear"
            alternateIcon={solid("xmark")}
            onClickEvent={onReset}
          />
          <CustomButton
            variant="primary"
            text="Start"
            disable={false}
            icon={solid("play")}
            showAlternate={start}
            alternateText="Pause"
            alternateIcon={solid("pause")}
            onClickEvent={onStart}
          />
          <CustomButton
            variant="secondary"
            text="Next"
            disable={false}
            icon={solid("angle-right")}
            onClickEvent={onNext}
          />
        </Container>
      </Navbar>
    );
  }
}

export default OptionsBar;
