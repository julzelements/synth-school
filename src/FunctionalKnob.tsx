import { useState } from "react";

interface KnobProps {
  size: number;
  min: number;
  max: number;
  numTicks: number;
  fullAngle: number;
  value: number;
  color: boolean;
  onChange: (newValue: number) => void;
}

const convertRange = (
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number,
  oldValue: number
) => {
  return Math.floor(
    ((oldValue - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin
  );
};

const dcpy = (o: { width: number; height: number }) => {
  return JSON.parse(JSON.stringify(o));
};

const FunctionalKnob = (props: KnobProps) => {
  const startAngle: number = (360 - props.fullAngle) / 2;
  const endAngle: number = startAngle + props.fullAngle;
  const margin: number = props.size * 0.15;
  const [currentDegrees, setCurrentDegrees] = useState(
    convertRange(startAngle, endAngle, props.min, props.max, props.value)
  );

  const getDeg = (cX: number, cY: number, pts: { x: any; y: any }) => {
    const x = cX - pts.x;
    const y = cY - pts.y;
    let deg = (Math.atan(y / x) * 180) / Math.PI;
    if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
      deg += 90;
    } else {
      deg += 270;
    }
    let finalDeg = Math.min(Math.max(startAngle, deg), endAngle);
    return finalDeg;
  };

  const startDrag = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const knob = e.currentTarget.getBoundingClientRect();
    const pts = {
      x: knob.left + knob.width / 2,
      y: knob.top + knob.height / 2,
    };
    const moveHandler = (e: { clientX: number; clientY: number }) => {
      setCurrentDegrees(getDeg(e.clientX, e.clientY, pts));
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
  iStyle.transform = "rotate(" + currentDegrees + "deg)";

  return (
    <div className="knob" style={knobStyle}>
      <div className="knob outer" style={oStyle} onMouseDown={startDrag}>
        <div className="knob inner" style={iStyle}>
          <div className="grip" />
        </div>
      </div>
    </div>
  );
};

export default FunctionalKnob;
