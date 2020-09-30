import React, { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const COLOR_LIST = ["deeppink", "green", "black", "blue", "red"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
}

function IndexColorBox(props) {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });

  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      COLOR BOX123 sâ
    </div>
  );
}

export default IndexColorBox;
