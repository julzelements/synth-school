import Switch from "@/components/Switch";

const OscOctaveLeds = (props: { octave: number }) => {
  const leds = Array.from(Array(4).keys())
    .map((value, index) => (index === props.octave ? "led-array-light led-array-light-active" : "led-array-light"))
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
  value: number;
  onChange: (value: number) => void;
  half?: boolean;
}

const VCO2Octave = (props: WaveProps) => {
  let transposedValue;
  switch (props.value) {
    case 127:
      transposedValue = 3;
      break;
    case 84:
      transposedValue = 2;
      break;
    case 42:
      transposedValue = 1;
      break;
    case 0:
      transposedValue = 0;
      break;
    default:
      transposedValue = props.value;
  }

  return (
    <div className={`control-group${props.half ? " control-group-half-width" : ""}`}>
      <div className="control-wrapper">
        <Switch value={transposedValue} numPositions={4} vertical onChange={props.onChange} />
      </div>
      <p className="control-label label">{props.paramName}</p>
      <OscOctaveLeds octave={transposedValue} />
    </div>
  );
};

export default VCO2Octave;
