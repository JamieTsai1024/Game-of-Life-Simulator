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
      reset: false,
      // board: [
      //   [0, 0, 0, 0, 0],
      //   [0, 0, 0, 0, 0],
      //   [0, 0, 0, 0, 0],
      //   [0, 0, 0, 0, 0],
      //   [0, 0, 0, 0, 0],
      // ],
      board: [
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
        [0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
        [0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      ],
      originalBoard: [],
      step: 0,
    };
  }

  handleNext = () => {
    var resultBoard = this.state.board.map(function (arr) {
      return arr.slice();
    });
    // maybe make a variable for this.state.board

    // console.log("this.state.board", this.state.board);
    var surroundingLive = 0;

    for (var i = 0; i < this.state.board.length; i++) {
      for (var j = 0; j < this.state.board[0].length; j++) {
        // Calculate how many surrounding squares are alive
        surroundingLive = 0;
        if (i !== 0 && this.state.board[i]) {
          // Look through the top
          // Top left
          surroundingLive += j !== 0 ? this.state.board[i - 1][j - 1] : 0;
          // console.log("here i, j", i, j, "Top left", surroundingLive);
          // Top middle
          surroundingLive += this.state.board[i - 1][j];
          // console.log("here i, j", i, j, "Top left", surroundingLive);
          // Top right
          surroundingLive +=
            j !== this.state.board[0].length - 1
              ? this.state.board[i - 1][j + 1]
                ? 1
                : 0
              : 0;
          // console.log("here i, j", i, j, "Top left", surroundingLive);
        }

        if (j !== 0) {
          // Middle left
          surroundingLive += this.state.board[i][j - 1];
        }

        // console.log("here i, j", i, j, "Middle left", surroundingLive);

        if (j !== this.state.board[0].length - 1) {
          // Middle right
          surroundingLive += this.state.board[i][j + 1];
        }

        // console.log("here i, j", i, j, "Middle right", surroundingLive);

        if (i !== this.state.board.length - 1) {
          // Look through the bottom
          // Bottom left
          surroundingLive += j !== 0 ? this.state.board[i + 1][j - 1] : 0;
          // console.log("here i, j", i, j, "Bottom left", surroundingLive);
          // Bottom middle
          surroundingLive += this.state.board[i + 1][j];
          // console.log("here i, j", i, j, "Bottom middle", surroundingLive);
          // Bottom right
          surroundingLive +=
            j !== this.state.board[0].length - 1
              ? this.state.board[i + 1][j + 1]
                ? 1
                : 0
              : 0;
          // console.log("here i, j", i, j, "Bottom right", surroundingLive);
        }

        console.log("i, j", i, j, "total", surroundingLive);

        // Simplify these cases later
        if (this.state.board[i][j]) {
          // Case 1: The cell is alive
          // Turn it off if it doesn't have 2 and doesn't have 3 surrounding live cells
          if (surroundingLive !== 2 && surroundingLive !== 3) {
            // Should die
            console.log(
              // this.state.board[i][j],
              "i, j",
              i,
              j,
              "turn off - surroundingLive"
            );
            resultBoard[i][j] = 0;
          }
        } else {
          // Case 2: The cell is dead
          // Turn it on if it has 3 surrounding live cells
          if (surroundingLive === 3) {
            // Should live
            resultBoard[i][j] = 1;
            console.log("i, j", i, j, "turn on - surroundingLive");
          }
        }
      }
    }
    this.setState({ board: resultBoard });
  };

  handleStart = () => {
    // Save current board for reset and toggle start/pause
    console.log("start");
    this.setState({
      originalBoard: this.state.board,
      start: !this.state.start,
      reset: true,
    });
  };

  handleReset = () => {
    console.log("reset");
    if (this.state.reset) {
      // Reset board
      // **Figure out how to reset (might get rid of originalBoard state and just put it here and when initializing the board state)
      this.setState({ board: this.state.originalBoard });
    } else {
      // Clear board
      var board = this.state.board;
      for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
          board[i][j] = 0;
        }
      }
      this.setState({ board: board });
    }
    this.setState({ reset: !this.state.reset });
  };

  // handleNext = () => {
  //   const board = this.nextStep(this.state.board);
  //   this.setState({ board: board });
  // };

  handleSquareClick = (row, col) => {
    // console.log("here1", row, col);
    var board = [...this.state.board];
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
