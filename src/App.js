import "./styles.css";
import React, { useState } from "react";
//
const createGrid = () => {
  /*
  [
    [{x:num, y:num}],
    [{x:num, y:num}],
    ...
  ]

  */
  let output = [];
  for (let x = 0; x < 9; x++) {
    let row = [];
    for (let y = 0; y < 9; y++) {
      let isRoomba = false;
      if (x === 0 && y === 0) {
        isRoomba = true;
      }
      row.push({ x: x, y: y, isRoomba: isRoomba });
    }
    output.push(row);
  }
  return output;
};

const ButtonWrapper = () => {
  return (
    <div>
      <button>UP</button>
      <button>RIGHT</button>
    </div>
  );
};
const Square = ({ x, y, roombaLocal }) => {
  return (
    <div style={{ border: "1px solid cyan", backgroundColor: "white" }}>
      <span>{`x=${x}/y=${y}`}</span>
    </div>
  );
};

const Row = ({ data, roombaLocal }) => {
  return (
    <div>
      {data.map((square, i) => {
        return (
          <Square key={i} x={square.x} y={square.y} roombaLocal={roombaLocal} />
        );
      })}
    </div>
  );
};
const Grid = ({ roombaLocal }) => {
  return (
    <div style={{ display: "flex" }}>
      {createGrid().map((row, i) => {
        return <Row key={i} data={row} roombaLocal={roombaLocal} />;
      })}
    </div>
  );
};
export default function App() {
  const [roombaLocal, setRoombaLocal] = useState([0, 0]);
  return (
    <div className="App">
      <h1>Roomba</h1>
      <ButtonWrapper />

      <Grid roombaLocal={roombaLocal} />
    </div>
  );
}
