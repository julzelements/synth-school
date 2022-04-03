import { useState } from "react";
import { finalDeg, getDegrees } from "./utils";

interface KnobProps {
  size: number;
  paramMin: number;
  paramMax: number;
  paramName: string;
  fullAngle: number;
  initialParam: number;
  color: boolean;
  onChange: (newValue: number) => void;
}

const dcpy = (o: { width: number; height: number }) => {
  return JSON.parse(JSON.stringify(o));
};

const Knob = (props: KnobProps) => {
  const startAngle: number = (360 - props.fullAngle) / 2;
  const endAngle: number = startAngle + props.fullAngle;
  const margin: number = props.size * 0.15;
  const [degrees, setDegrees] = useState(() => {
    const initialDegrees = getDegrees(
      props.paramMin,
      props.paramMax,
      startAngle,
      endAngle,
      props.initialParam
    );
    console.log(initialDegrees); // expect 90ish?
    return initialDegrees;
  });

  const startDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const knob = e.currentTarget.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e: { clientX: number; clientY: number }) => {
      setDegrees(finalDeg(e.clientX, e.clientY, pts, startAngle, endAngle));
    };
    document.addEventListener("mousemove", moveHandler);
    document.addEventListener("mouseup", (e) => {
      document.removeEventListener("mousemove", moveHandler);
    });
  };

  const knobStyle = {
    width: props.size,
    height: props.size,
  };
  const iStyle = dcpy(knobStyle);
  const oStyle = dcpy(knobStyle);
  oStyle.margin = margin;
  iStyle.transform = "rotate(" + degrees + "deg)";

  const minilogueStyle = {
    transform: "rotate(" + degrees + "deg)",
  };

  return (
    <div>
      <div>{props.paramName}</div>
      <div className="knob" style={knobStyle}>
        <div className="knob outer" style={oStyle} onMouseDown={startDrag}>
          <div className="knob inner" style={iStyle}>
            <div className="grip" />
          </div>
        </div>
      </div>
      <div className="knob-container">
        <div className="knob-value" style={minilogueStyle}>
          <div className="knob-value-inner" />
        </div>
      </div>
    </div>
  );
};

export default Knob;
