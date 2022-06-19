import React from "react";

function Square(props) {
  const squareStyle = { backgroundColor: props.colour };
  return <div style={squareStyle}></div>;
  // const squareStyle = `background-color: ${props.colour}`;
  // return <div className={squareStyle}></div>;
}

export default Square;
