import { useEffect, useState } from "react";

function formatDate(date) {
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newString = formatDate(now);
      setTimeString(newString);
    }, 1000);
    return () => {
      //clear up
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
