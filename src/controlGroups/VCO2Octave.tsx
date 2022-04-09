import Switch from "../Switch";

const OscOctaveLeds = (props: { octave: number }) => {
  const leds = Array.from(Array(4).keys())
    .map((value, index) =>
      index === props.octave
        ? "led-array-light led-array-light-active"
        : "led-array-light"
    )
    .map((spanStyle, index) => (
      <li key={index} className="led-array-value">
        <span className={spanStyle}></span>
      </li>
    ))
    .reverse();

  return <ul className="led-array">{leds}</ul>;
};

interface WaveProps {
  paramName?: string;
  initialValue?: number;
  onChange?: (value) => void;
  half?: boolean;
}

const VCO2Octave = (props: WaveProps) => {
  return (
    <div
      className={`control-group${
        props.half ? " control-group-half-width" : ""
      }`}
    >
      <div className="control-wrapper">
        <Switch
          value={props.initialValue}
          numPositions={4}
          vertical
          onChange={props.onChange}
        />
      </div>
      <p className="control-label label">{props.paramName}</p>
      <OscOctaveLeds octave={props.initialValue} />
    </div>
  );
};

export default VCO2Octave;
