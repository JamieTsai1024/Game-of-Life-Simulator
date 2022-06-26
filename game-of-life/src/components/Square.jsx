import React from "react";

function Square(props) {
  const squareStyle = {
    // backgroundColor: props.colour,
    borderStyle: "none",
    // borderColor: "black",
    // borderWidth: "1px",
    margin: "3px",
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
