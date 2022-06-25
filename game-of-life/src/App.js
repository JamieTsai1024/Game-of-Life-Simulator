import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import OptionsBar from "./components/OptionsBar";
import Board from "./components/Board";
import {
  solid,
  // regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";

const startingBoard = [
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
];

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
      start: false,
      reset: false,
      board: startingBoard,
      originalBoard: startingBoard,
      step: 0,
    };
  }

  // Takes in a board and sets the state board to the next iteration
  nextStep(board) {
    // Note: this.state is accessible in this function, but it's nice to just use board

    // Define variables
    var resultBoard = board.map(function (arr) {
      return arr.slice();
    });
    var surroundingLive = 0;

    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[0].length; j++) {
        // Calculate how many surrounding squares are alive
        surroundingLive = 0;

        // Look through the top row
        if (i !== 0 && board[i]) {
          // Top left
          surroundingLive += j !== 0 ? board[i - 1][j - 1] : 0;
          // Top middle
          surroundingLive += board[i - 1][j];
          // Top right
          surroundingLive +=
            j !== board[0].length - 1 ? (board[i - 1][j + 1] ? 1 : 0) : 0;
        }

        // Look through the middle row
        if (j !== 0) {
          // Middle left
          surroundingLive += board[i][j - 1];
        }
        if (j !== board[0].length - 1) {
          // Middle right
          surroundingLive += board[i][j + 1];
        }

        // Look through the bottom row
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
            // console.log("i, j", i, j, "turn off - surroundingLive");
            resultBoard[i][j] = 0;
          }
        } else {
          // Case 2: The cell is dead - turn it on if it has 3 surrounding live cells
          if (surroundingLive === 3) {
            // Should live
            resultBoard[i][j] = 1;
            // console.log("i, j", i, j, "turn on - surroundingLive");
          }
        }
      }
    }
    // return resultBoard;
    this.setState({ board: resultBoard });
  }

  runGame() {
    // console.log("start run game", this.state.start);
    setTimeout(() => {
      // console.log("start", this.state.start);
      if (this.state.start) {
        this.nextStep(this.state.board);
        // console.log("next");
      } else {
        return;
      }
      this.runGame(this.state.start);
    }, 500);
  }

  handleNext = () => {
    // Set the board with the next iteration
    // this.setState({ board: this.nextStep(this.state.board) });
    this.nextStep(this.state.board);
  };

  handleStart = () => {
    // Save current board for reset and toggle start/pause
    this.setState(
      {
        originalBoard: this.state.board,
        start: !this.state.start,
        reset: true,
      },
      () => {
        // console.log("start after", this.state.start);
        this.runGame(this.state.start);
      }
    );
    // console.log("start after", this.state.start);
  };

  handleReset = () => {
    console.log("reset");
    if (this.state.reset) {
      // Reset board - to the board when start was pressed
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

  handleSquareClick = (row, col) => {
    var board = [...this.state.board];
    board[row][col] = !board[row][col];
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
