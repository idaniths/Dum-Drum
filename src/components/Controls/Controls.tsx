interface ControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onStop: () => void;
}

function Controls({ isPlaying, onPlay, onStop }: ControlsProps) {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
    >
      <button style={{ marginRight: "10px" }} onClick={onPlay}>
        Play
      </button>
      <button disabled={!isPlaying} onClick={onStop}>
        Stop
      </button>
    </div>
  );
}

export default Controls;
