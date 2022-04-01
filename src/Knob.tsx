/**
 * A rotary knob component.
 */
import React from "react";
import "./Knob.css";

const mapToRange = (
  value: number,
  inLow: number,
  inHigh: number,
  outLow: number,
  outHigh: number
) => {
  const fromRange = inHigh - inLow;
  const toRange = outHigh - outLow;
  const scale = (value - inLow) / fromRange;
  return Math.round(toRange * scale + outLow);
};

const coerceToStep = (
  value: number,
  low: number,
  high: number,
  step: number
) => {
  const adjusted = value - low;
  const nearestStep = Math.round(adjusted / step) * step;
  return Math.max(low, Math.min(high, low + nearestStep));
};

interface KnobProps {
  value: number;
  min: number;
  max: number;
  angleOffset: number;
  arc: number;
  step: number;
  onChange?: (value: number) => {};
}

interface KnobState {
  value: number;
}

// angle arc - the number of degrees of travel [0, 360]
// angle offset - the start point for the value [-180, 180]
// minValue - 0 - the minimum for the value represented by this component
// maxValue - 1023 - the maximum  for the value represented by this component
// step - 1 - the amount to
export default class Knob extends React.Component<KnobProps, KnobState> {
  static min = 0;
  static max = 1023;
  static angleOffset = -135;
  static arc = 270;
  static step = 1;
  static knobElement: HTMLDivElement | null;

  constructor(props: KnobProps) {
    super(props);
    Knob.min = props.min;
    Knob.max = props.max;
    Knob.angleOffset = props.angleOffset;
    Knob.arc = props.arc;
    Knob.step = props.step;
  }

  state = {
    value: this.props.value,
  };

  // componentWillReceiveProps = (nextProps) => {
  //   if (this.state.value !== nextProps.value) {
  //     this.setState({
  //       value: nextProps.value,
  //     });
  //   }
  // };

  onMouseDown = (event: React.MouseEvent<HTMLElement>) => {
    // Update the value location to where the click occurred
    this.onMouseMove(event);
    // Connect the mouse events to the component
    event.preventDefault();
    // document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
  };

  onMouseMove = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    // Store mouse pointer location
    const { clientX, clientY } = event;

    const removeThisBox = {
      width: 10,
      left: 10,
      top: 10,
      height: 10,
    };

    this.setState((prevState, props) => {
      event.preventDefault();
      // Find the center of rotation
      const boundingBox =
        Knob.knobElement?.getBoundingClientRect() || removeThisBox;
      console.log(boundingBox);
      const center = [
        boundingBox.left + boundingBox.width / 2,
        boundingBox.top + boundingBox.height / 2,
      ];
      // Find where the mouse pointer is in relation to the center of rotation
      const dX = clientX - center[0];
      const dY = clientY - center[1];
      // Compute the angle in degrees
      let angle = Math.atan2(dY, dX) * (180 / Math.PI);
      // Transform the angle to have 0 at 12 o'clock
      if (dX <= 0 && dY >= 0) {
        angle -= 270;
      } else {
        angle += 90;
      }
      const minAngle = props.angleOffset;
      const maxAngle = props.angleOffset + props.arc;
      const clamped = Math.max(minAngle, Math.min(maxAngle, angle));
      const mapped = mapToRange(
        clamped,
        minAngle,
        maxAngle,
        props.min,
        props.max
      );
      const newValue = coerceToStep(mapped, props.min, props.max, props.step);
      if (newValue !== prevState.value && props.onChange) {
        props.onChange(newValue);
      }
      return {
        value: newValue,
      };
    });
  };

  onMouseUp = () => {
    // document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    // document.removeEventListener("keyup", this.onKeyUp);
  };

  onWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const { deltaY } = event;
    this.setState((prevState, props) => {
      let delta = props.step;
      delta = deltaY >= 0 ? -delta : delta;
      const newValue = Math.max(
        props.min,
        Math.min(prevState.value + delta, props.max)
      );
      if (newValue !== prevState.value && props.onChange) {
        props.onChange(newValue);
      }
      return { value: newValue };
    });
  };

  render() {
    const { min, max, angleOffset, arc } = this.props;
    const angle = mapToRange(
      this.state.value,
      min,
      max,
      angleOffset,
      angleOffset + arc
    );
    const style = {
      transform: `rotate(${angle}deg)`,
    };
    return (
      <div
        className="knob-container"
        onMouseDown={this.onMouseDown}
        onWheel={this.onWheel}
      >
        <div
          className="knob-value"
          ref={(el: HTMLDivElement | null) => {
            Knob.knobElement = el;
          }}
          style={style}
        >
          <div className="knob-value-inner" />
        </div>
      </div>
    );
  }
}
