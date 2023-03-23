import React, { useState } from "react";
import "./SinglePad.css";

export default function SinglePad({
  audio,
  color,
}: {
  audio: string;
  color: boolean;
}) {
  const [changeBg, setChangeBg] = useState(false);
  const [value, setValue] = useState(0);

  const playSound = () => {
    if (value === 0) {
      setValue(1);
      setChangeBg(!changeBg);
      new Audio(audio).play();
    }
    if (value === 1) {
      setChangeBg(!changeBg);
      setValue(0);
    }
  };

  const backgroundColor = changeBg ? "red" : "white";

  return (
    <div className="single-pad">
      <button
        className="single-pad-button"
        style={{ backgroundColor: backgroundColor }}
        onClick={playSound}
      >
        AUDIO
      </button>
    </div>
  );
}
