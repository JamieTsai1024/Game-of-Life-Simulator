import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import OptionsBar from "./components/OptionsBar";
import Board from "./components/Board";
import {
  solid,
  // regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

// const originalBoard = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      board: [
        [0, 1, 1, 0],
        [0, 0, 1, 1],
      ],
      originalBoard: [],
      step: 0,
    };
  }

  nextStep = (board) => {
    // Code this function
    return board;
  };

  handleStart = () => {
    this.setState({ start: !this.state.start });
  };

  handleReset = () => {
    // console.log("reset");
    if (this.state.reset) {
      // **Figure out how to reset (might get rid of originalBoard state and just put it here and when initializing the board state)
      this.setState({ board: this.state.originalBoard });
    } else {
      this.setState({ board: this.state.originalBoard });
    }
    this.setState({ reset: !this.state.reset });
  };

  handleNext = () => {
    // console.log("sdfghjk");
    const board = this.nextStep(this.state.board);
    this.setState({ board: board });
  };

  handleSquareClick = (row, col) => {
    // console.log("here1", row, col);
    const board = [...this.state.board];
    // console.log("here2");
    board[row][col] = !board[row][col];
    // console.log("here3");
    this.setState({ board: board });
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar links={this.state.links} />
        <Board
          board={this.state.board}
          liveColour="#a864d3"
          deadColour="#5ffae0"
          onSquareClick={this.handleSquareClick}
        />
        {/* <Square colour="#1B5C41" onSquareClick={this.handleSquareClick} /> */}
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
