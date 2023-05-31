import { useState } from "react";

const ColorPicker = () => {
  const red = "#EE4B2B";
  const blue = "#89CFF0";
  const green = "#7FFFD4";
  const [showRed, setShowRed] = useState(false);
  const [showBlue, setShowBlue] = useState(false);
  const [showGreen, setShowGreen] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShowRed(!showRed);
        }}
      >
        Red Button
      </button>
      <p>{showRed && red}</p>

      <button
        onClick={() => {
          setShowBlue(!showBlue);
        }}
      >
        Blue Button
      </button>
      <p>{showBlue && blue}</p>
      <button
        onClick={() => {
          setShowGreen(!showGreen);
        }}
      >
        Green Button
      </button>
      <p>{showGreen && green}</p>
    </>
  );
};
export default ColorPicker;
