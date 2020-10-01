import React, { useEffect, useRef, useState } from "react";

function randomColor(currentColor) {
  const COLOR_LIST = ["red", "green", "yellow"];
  const currentIndex = COLOR_LIST.indexOf(currentColor);
  let newIndex = currentIndex;

  while (currentIndex === newIndex) {
    newIndex = Math.trunc(Math.random() * 3);
  }
  console.log(COLOR_LIST[newIndex]);
  return COLOR_LIST[newIndex];
}

function useMagicColor() {
  const [color, setColor] = useState("transparent");
  const colorRef = useRef("transparent"); /// 1 biến state chạy qua useEffect và thay đổi state
  useEffect(() => {
    const colorInterval = setInterval(() => {
      const newColor = randomColor(colorRef.current);
      colorRef.current = newColor; /// không có dòng này sẽ báo lỗi
      setColor(newColor);
    }, 1000);

    return () => {
      clearInterval(colorInterval);
    };
  }, []);
  return color;
}

export default useMagicColor;
