import React from "react";
import Square from "./Square";

function Board(props) {
  return (
    <div>
      {props.board.map((row, index) => (
        <div key={index} className="d-flex align-items-center">
          {row.map((squareActive, ind) => (
            <Square
              key={index + " " + ind}
              row={index}
              col={ind}
              size="50px"
              onSquareClick={props.onSquareClick}
              colour={squareActive ? props.liveColour : props.deadColour}
            ></Square>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;