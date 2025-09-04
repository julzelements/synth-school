"use client";
import { useEffect, useState, memo, useRef } from "react";
import { sysexRangeMax, convertInvertibleSysexToDegrees } from "@/utils/conversions";
import { rangeMap, cursorCoordsToDegrees } from "@/utils/utils";

interface KnobProps {
  paramMin?: number;
  paramMax?: number;
  paramName: string;
  fullAngle?: number;
  color?: string;
  invertedColor?: string;
  value: number;
  invertible?: boolean;
  onChange: (newValue: number) => void;
}

const Knob = memo((props: KnobProps) => {
  Knob.displayName = "Knob";
  const paramMin = props.paramMin || 0;
  const paramMax = props.paramMax || sysexRangeMax;
  const fullAngle = props.fullAngle || 260;
  const startAngle: number = (360 - fullAngle) / 2;
  const endAngle: number = startAngle + fullAngle;
  const isInverted = props.invertible && props.value < 0;

  const invertibleSysexToDegrees = (sysexValue: number) =>
    convertInvertibleSysexToDegrees(sysexValue, startAngle, endAngle);
  const sysexToDegrees = (sysexValue: number) => rangeMap(paramMin, paramMax, startAngle, endAngle, sysexValue);
  // TODO invertibleDegreesToSysex (can't do without additional UI to set inverted controls)
  const degreesToSysex = (degrees: number) => Math.floor(rangeMap(startAngle, endAngle, paramMin, paramMax, degrees));

  const degrees: number = props.invertible ? invertibleSysexToDegrees(props.value) : sysexToDegrees(props.value);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const [active, setActive] = useState(() => false);
  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    setActive(true);
    timer.current = setTimeout(() => {
      setActive(false);
    }, 1500);
  }, [props.value]);

  const startDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const knob = e.currentTarget.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e: { clientX: number; clientY: number }) => {
      const degrees = cursorCoordsToDegrees(e.clientX, e.clientY, pts, startAngle, endAngle);
      props.onChange(degreesToSysex(degrees));
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  const knobStyle = {
    transform: `rotate(${degrees}deg)`,
    background: isInverted ? props.invertedColor : props.color,
  };

  const knobInnerStyle = {
    background: props.color ? "black" : undefined,
  };

  return (
    <div className="control-group">
      <div className="control-wrapper">
        <div className="knob-container">
          <div
            className={`knob-value ${active && "knob-glow"}`}
            style={knobStyle}
            onMouseDown={startDrag}
            data-testid={props.paramName}
          >
            <div className="knob-value-inner" style={knobInnerStyle} />
          </div>
        </div>
      </div>
      <p className="control-label label">{props.paramName}</p>
    </div>
  );
});

export default Knob;
