import { useEffect, useState } from "react";
import "./Switch.css";

interface SwitchProps {
  value: number;
  numPositions: number;
  vertical: boolean;
  onChange: (newValue: number) => void;
}

const Switch = (props: SwitchProps) => {
  var rangeEl;
  var valueEl;

  useEffect(() => updateValueElement());

  const updateValueElement = () => {
    // Calculate the top offset
    const { height: rangeHeight, width: rangeWidth } =
      rangeEl.getBoundingClientRect();
    const { height: valueHeight, width: valueWidth } =
      valueEl.getBoundingClientRect();
    const rangeSize = props.vertical ? rangeHeight : rangeWidth;
    const valueSize = props.vertical ? valueHeight : valueWidth;
    const stepSize = (rangeSize - valueSize) / (props.numPositions - 1);
    const offset = value * stepSize;
    const styleProperty = props.vertical ? "bottom" : "left";
    valueEl.style[styleProperty] = `${offset}px`;
  };

  const [value, setValue] = useState(() => props.value);

  const onMouseMove = (event) => {
    console.log(rangeEl);
    console.log(valueEl);
    handleMousePosition(event);
  };

  const onMouseDown = (event) => {
    onMouseMove(event);
    event.preventDefault();
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const handleMousePosition = (event) => {
    const { clientX, clientY } = event;
    const { height, width, bottom, left } = rangeEl.getBoundingClientRect();
    const size = props.vertical ? height : width;
    const positionSize = size / props.numPositions;
    const relativePosition = props.vertical ? bottom - clientY : clientX - left;
    const positionIndex = Math.max(
      0,
      Math.min(
        Math.floor(relativePosition / positionSize),
        props.numPositions - 1
      )
    );
    updateValueElement();
    props.onChange(positionIndex);
    setValue(positionIndex);
  };

  const onRangeClick = (event) => {
    event.preventDefault();
    handleMousePosition(event);
  };

  return (
    <div
      className={`switch-range ${
        props.vertical ? "switch-range-vertical" : "switch-range-horizontal"
      }`}
      ref={(element) => {
        rangeEl = element;
      }}
      onClick={onRangeClick}
    >
      <div
        className="switch-value"
        ref={(element) => {
          valueEl = element;
        }}
        onMouseDown={onMouseDown}
      />
    </div>
  );
};

export default Switch;
