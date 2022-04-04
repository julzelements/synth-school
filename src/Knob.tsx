import { useState } from "react";
import { cursorCoordsToDegrees, degreesToParam, paramToDegrees } from "./utils";

interface KnobProps {
  paramMin: number;
  paramMax: number;
  paramName: string;
  fullAngle: number;
  initialParam: number;
  color: boolean;
  onChange: (newValue: number) => void;
}

const Knob = (props: KnobProps) => {
  const startAngle: number = (360 - props.fullAngle) / 2;
  const endAngle: number = startAngle + props.fullAngle;
  const [degrees, setDegrees] = useState(() => {
    const initialDegrees = paramToDegrees(
      props.paramMin,
      props.paramMax,
      startAngle,
      endAngle,
      props.initialParam
    );
    return initialDegrees;
  });
  const [paramValue, setParamValue] = useState(() => props.initialParam);

  const startDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const knob = e.currentTarget.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e: { clientX: number; clientY: number }) => {
      const degrees = cursorCoordsToDegrees(
        e.clientX,
        e.clientY,
        pts,
        startAngle,
        endAngle
      );
      setDegrees(degrees);
      const currentParamValue = degreesToParam(
        props.paramMin,
        props.paramMax,
        startAngle,
        endAngle,
        degrees
      );
      setParamValue(currentParamValue);
      props.onChange(currentParamValue);
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", (e) => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  const knobStyle = {
    transform: "rotate(" + degrees + "deg)",
  };

  return (
    <div>
      <div className="knob-container">
        <div className="knob-value" style={knobStyle} onMouseDown={startDrag}>
          <div className="knob-value-inner" />
        </div>
      </div>
    </div>
  );
};

export default Knob;
