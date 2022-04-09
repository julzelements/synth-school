import { Parameter } from "../types";

export const KeyboardOctaveLeds = (props: { octave: Parameter }) => {
  const leds = Array.from(Array(5).keys())
    .map((value, index) =>
      index === props.octave.value
        ? "led-array-light led-array-light-active"
        : "led-array-light"
    )
    .map((spanStyle, index) => (
      <li key={index} className="led-array-value">
        <span className={spanStyle}></span>
      </li>
    ));

  return (
    <div id="keyboard-octave-leds">
      <ul className="led-array">{leds}</ul>
    </div>
  );
};
