"use client";

import { useEffect, useRef, memo, useCallback } from "react";
import "./Switch.css";

interface SwitchProps {
  value: number;
  numPositions: number;
  vertical: boolean;
  onChange: (newValue: number) => void;
}

const Switch = memo((props: SwitchProps) => {
  Switch.displayName = "Switch";
  const rangeEl = useRef<HTMLDivElement | null>(null);
  const valueEl = useRef<HTMLDivElement | null>(null);

  const updateValueElement = useCallback(
    (value: number) => {
      if (!rangeEl.current || !valueEl.current) return;

      const rangeRect = rangeEl.current.getBoundingClientRect();
      const valueRect = valueEl.current.getBoundingClientRect();

      const rangeSize = props.vertical ? rangeRect.height : rangeRect.width;
      const valueSize = props.vertical ? valueRect.height : valueRect.width;

      const stepSize = (rangeSize - valueSize) / (props.numPositions - 1);
      const offset = value * stepSize;

      const styleProperty: "left" | "bottom" = props.vertical ? "bottom" : "left";
      valueEl.current!.style[styleProperty] = `${offset}px`;
    },
    [props.numPositions, props.vertical]
  );

  useEffect(() => {
    if (rangeEl.current && valueEl.current) {
      updateValueElement(props.value);
    }
  }, [props.value, updateValueElement]);

  const handleMousePosition = (event: MouseEvent | React.MouseEvent<HTMLDivElement>) => {
    if (!rangeEl.current) return;

    const { clientX, clientY } = event;
    const { height, width, bottom, left } = rangeEl.current.getBoundingClientRect();

    const size = props.vertical ? height : width;
    const positionSize = size / props.numPositions;
    const relativePosition = props.vertical ? bottom - clientY : clientX - left;

    const positionIndex = Math.max(0, Math.min(Math.floor(relativePosition / positionSize), props.numPositions - 1));

    props.onChange(positionIndex);
    updateValueElement(positionIndex);
  };

  const onMouseMove = (event: MouseEvent) => {
    handleMousePosition(event);
  };

  const onMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleMousePosition(event.nativeEvent);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const onMouseUp = () => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  };

  const onRangeClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    handleMousePosition(event);
  };

  return (
    <div
      className={`switch-range ${props.vertical ? "switch-range-vertical" : "switch-range-horizontal"}`}
      ref={rangeEl}
      onClick={onRangeClick}
    >
      <div className="switch-value" ref={valueEl} onMouseDown={onMouseDown} />
    </div>
  );
});

export default Switch;
