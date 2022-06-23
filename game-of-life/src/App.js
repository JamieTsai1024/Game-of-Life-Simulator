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

  nextStep(board) {
    var resultBoard = board.map(function (arr) {
      return arr.slice();
    });

    console.log("this.state.board", this.state.board);
    var surroundingLive = 0;

    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
        // Calculate how many surrounding squares are alive
        surroundingLive = 0;
        // Look through the top
        if (i !== 0 && board[i]) {
          // Top left
          surroundingLive += j !== 0 ? board[i - 1][j - 1] : 0;
          // Top middle
          surroundingLive += board[i - 1][j];
          // Top right
          surroundingLive +=
            j !== board[0].length - 1 ? (board[i - 1][j + 1] ? 1 : 0) : 0;
        }

        // Middle left
        if (j !== 0) {
          surroundingLive += board[i][j - 1];
        }

        // Middle right
        if (j !== board[0].length - 1) {
          surroundingLive += board[i][j + 1];
        }

        // Look through the bottom
        if (i !== board.length - 1) {
          // Bottom left
          surroundingLive += j !== 0 ? board[i + 1][j - 1] : 0;
          // Bottom middle
          surroundingLive += board[i + 1][j];
          // Bottom right
          surroundingLive +=
            j !== board[0].length - 1 ? (board[i + 1][j + 1] ? 1 : 0) : 0;
        }

        // console.log("i, j", i, j, "total", surroundingLive);

        // Turn square on or off depending on how many neighbours it has
        if (board[i][j]) {
          // Case 1: The cell is alive - turn it off if it doesn't have 2 or 3 surrounding live cells
          if (surroundingLive !== 2 && surroundingLive !== 3) {
            // Should die
            console.log("i, j", i, j, "turn off - surroundingLive");
            resultBoard[i][j] = 0;
          }
        } else {
          // Case 2: The cell is dead - turn it on if it has 3 surrounding live cells
          if (surroundingLive === 3) {
            // Should live
            resultBoard[i][j] = 1;
            console.log("i, j", i, j, "turn on - surroundingLive");
          }
        }
      }
    }
    return resultBoard;
  }

  handleNext = () => {
    // Set the board with the next iteration
    this.setState({ board: this.nextStep(this.state.board) });
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
