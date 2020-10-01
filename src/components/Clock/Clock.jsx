import React from "react";
import useClock from "../../hook/useClock";

function Clock() {
  const { timeString } = useClock();

  return <p>{timeString}</p>;
}

export default Clock;
