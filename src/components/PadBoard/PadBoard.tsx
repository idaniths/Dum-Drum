import React from "react";
import SinglePad from "../Singlepad/SinglePad";
import { soundBank } from "../../data/SoundBank";

interface Props {
  audio?: string;
  color?: boolean;
}

export default function PadBoard(props: Props) {
  const newPadsArray = [...soundBank];

  const playSound = () => {
    if (props.color === true) {
      return new Audio(props.audio).play();
    }
    console.log("play");
  };

  let intervalId: any;

  const playSoundIn120bpm = () => {
    const interval = 500;
    intervalId = setInterval(playSound, interval);
  };

  const stopSound = () => {
    clearInterval(intervalId);
  };
  console.log("stop");

  return (
    <div>
      {newPadsArray.map((sound, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>{sound.name}</p>
          {[...Array(16)].map((_, i) => (
            <SinglePad key={i} audio={sound.audio} color />
          ))}
        </div>
      ))}
      <button onClick={playSoundIn120bpm}>PLAY</button>
      <button onClick={stopSound}>STOP</button>
    </div>
  );
}
