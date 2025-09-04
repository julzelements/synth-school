import { ReactElement } from "react";

import Switch from "@/components/Switch";
import Saw from "@/assets/Saw";
import Square from "@/assets/Square";
import Triangle from "@/assets/Triangle";

interface WaveProps {
  paramName?: string;
  value?: number;
  onChange: (value: number) => void;
  labels?: ReactElement[];
  half?: boolean;
}
const SwitchContainer = (props: WaveProps) => {
  const labels = props.labels || [<Saw key="saw" />, <Triangle key="triangle" />, <Square key="square" />];

  let transposedValue;
  switch (props.value) {
    case 127:
      transposedValue = 2;
      break;
    case 64:
      transposedValue = 1;
      break;
    case 0:
      transposedValue = 0;
      break;
    default:
      transposedValue = 0;
  }

  return (
    <div className={`control-group${props.half ? " control-group-half-width" : ""}`}>
      <div className="control-wrapper">
        <Switch value={transposedValue} numPositions={3} vertical onChange={props.onChange} />
        <div className="switch-label-wrapper">
          <ul className="switch-labels">
            {labels.map((label, index) => (
              <li className="switch-label" key={index}>
                <div className="switch-value-label">{label}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="control-label label">{props.paramName}</p>
    </div>
  );
};

export default SwitchContainer;
