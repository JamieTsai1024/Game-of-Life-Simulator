import React, { Component } from "react";
import CustomButton from "./CustomButton";
import {
  solid,
  // regular,
  // brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

class OptionsBar extends Component {
  state = {};
  render() {
    const { start, reset, onStart, onReset, onNext } = this.props;
    return (
      <div>
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
          text="Reset"
          icon={solid("refresh")}
          showAlternate={!reset}
          alternateText="Clear"
          alternateIcon={solid("xmark")}
          onClickEvent={onReset}
        />
        <CustomButton
          variant="secondary"
          text="Next"
          icon={solid("angle-right")}
          onClickEvent={onNext}
        />
      </div>
    );
  }
}

export default OptionsBar;
