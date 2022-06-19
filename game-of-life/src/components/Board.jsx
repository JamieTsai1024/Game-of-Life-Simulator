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
              onSquareClick={props.onSquareClick}
              colour={squareActive ? "#AD23AD" : "#1B5C41"}
            ></Square>
          ))}
        </div>
      ))}
    </div>
  );
}

// function Board({ board, onSquareClick }) {
//   return (
//     <div>
//       {board.map((row, index) => (
//         <div key={index} className="d-flex align-items-center">
//           {row.map((squareActive, ind) => (
//             <Square
//               key={index + " " + ind}
//               row={index}
//               col={ind}
//               onSquareClick={onSquareClick}
//               colour={squareActive ? "#AD23AD" : "#1B5C41"}
//             ></Square>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

// function Board(props) {
//   return (
//     <div>
//       {props.board.map((row, index) => (
//         <div key={index} className="d-flex align-items-center">
//           {row.map((squareActive, ind) => (
//             <Square
//               key={ind}
//               squareClick={props.squareClick}
//               colour={squareActive ? "#1B5C41" : "#1B5C41"}
//             ></Square>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

export default Board;
