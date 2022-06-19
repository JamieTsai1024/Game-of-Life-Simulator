import React from "react";

function Square(props) {
  const squareStyle = {
    backgroundColor: props.colour,
    // margin: "50px",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: "2px",
    width: "50px",
    height: "50px",
  };
  return (
    <button
      onClick={() => props.onSquareClick(props.row, props.col)}
      style={squareStyle}
    ></button>
  );
  // return <div style={squareStyle}></div>;
  // const squareStyle = `background-color: ${props.colour}`;
  // return <div className={squareStyle}></div>;
}

export default Square;
