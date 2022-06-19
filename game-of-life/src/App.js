import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
// import CustomButton from "./components/CustomButton";
import OptionsBar from "./components/OptionsBar";
import {
  solid,
  // regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// const originalBoard = [];
class App extends Component {
  state = {
    links: [
      {
        id: 0,
        page: "Explanation",
        openInNewTab: false,
        url: "#explanation",
        icon: solid("circle-info"),
      },
      {
        id: 1,
        page: "GitHub",
        openInNewTab: true,
        url: "https://github.com/JamieTsai1024/Game-of-Life-Simulator",
        icon: brands("github"),
      },
    ],
    start: true,
    reset: true,
    board: [],
    originalBoard: [],
  };

  nextStep = (board) => {
    // Code this function
    return board;
  };

  handleStart = () => {
    this.setState({ start: !this.state.start });
  };

  handleReset = () => {
    console.log("reset");
    if (this.state.reset) {
      // **Figure out how to reset (might get rid of originalBoard state and just put it here and when initializing the board state)
      this.setState({ board: this.state.originalBoard });
    } else {
      this.setState({ board: this.state.originalBoard });
    }
    this.setState({ reset: !this.state.reset });
  };

  handleNext = () => {
    const board = this.nextStep(this.state.board);
    this.setState({ board: board });
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar links={this.state.links} />
        <OptionsBar
          start={this.state.start}
          reset={this.state.reset}
          onStart={this.handleStart}
          onReset={this.handleReset}
          onNext={this.handleNext}
        />
      </React.Fragment>
    );
  }
}

export default App;
