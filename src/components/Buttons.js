import React from "react";

const Buttons = ({ handleButtonClick }) => {
  return (
    <div>
      <button onClick={() => handleButtonClick("AC")}>AC</button>
      <button onClick={() => handleButtonClick("1")}>1</button>
      <button onClick={() => handleButtonClick("+")}>+</button>
    </div>
  );
};

export default Buttons;
