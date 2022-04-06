const KeyboardOctaveLeds = () => {
  return (
    <div id="keyboard-octave-leds">
      <ul className="led-array">
        <li className="led-array-value">
          <span className="led-array-light led-array-light-active"></span>
        </li>
        <li className="led-array-value">
          <span className="led-array-light"></span>
        </li>
        <li className="led-array-value">
          <span className="led-array-light"></span>
        </li>
        <li className="led-array-value">
          <span className="led-array-light"></span>
        </li>
        <li className="led-array-value">
          <span className="led-array-light"></span>
        </li>
      </ul>
    </div>
  );
};

export default KeyboardOctaveLeds;
