import React from "react";

function Square(props) {
  const squareStyle = {
    backgroundColor: props.colour,
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "1px",
    width: "50px",
    height: "50px",
  };
  return (
    <button
      onClick={() => props.onSquareClick(props.row, props.col)}
      style={squareStyle}
    ></button>
  );
}

export default Square;
