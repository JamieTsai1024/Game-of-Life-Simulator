import React from "react";

function Square(props) {
  const squareStyle = {
    // backgroundColor: props.colour,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "1px",
    width: props.size,
    height: props.size,
  };
  return (
    <button
      onClick={() => props.onSquareClick(props.row, props.col)}
      style={squareStyle}
      className={props.squareClass}
    ></button>
  );
}

export default Square;
