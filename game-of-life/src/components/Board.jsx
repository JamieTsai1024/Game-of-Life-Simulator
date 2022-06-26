import React from "react";
import Square from "./Square";

function Board(props) {
  const boardStyle = {
    // border: "solid black 10px",
    // backgroundColor: "black",
    height: "100%",
  };

  return (
    <div className="board board-boarder">
      <div style={boardStyle}>
        {/* Having trouble centering the board */}
        {/* <div className="row d-flex justify-content-center"> */}
        {/* doesn't work for centering board: className="row d-flex justify-content-center" */}
        {props.board.map((row, rowIndex) => (
          <div key={rowIndex} className="d-flex align-items-center">
            {row.map((squareActive, colIndex) => (
              <Square
                key={rowIndex + " " + colIndex}
                row={rowIndex}
                col={colIndex}
                size="50px"
                onSquareClick={props.onSquareClick}
                squareClass={squareActive ? "live-cell" : "dead-cell"}
              ></Square>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
