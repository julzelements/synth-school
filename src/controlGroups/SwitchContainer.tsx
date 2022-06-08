import { ReactElement } from "react";
import { ReactComponent as Saw } from "../assets/saw.svg";
import { ReactComponent as Square } from "../assets/square.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import Switch from "../Switch";

interface WaveProps {
  paramName?: string;
  value?: number;
  onChange?: (value) => void;
  labels?: ReactElement<any, any>[];
  half?: boolean;
}
const SwitchContainer = (props: WaveProps) => {
  const labels = props.labels || [<Saw />, <Triangle />, <Square />];
  return (
    <div
      className={`control-group${
        props.half ? " control-group-half-width" : ""
      }`}
    >
      <div className="control-wrapper">
        <Switch
          value={props.value}
          numPositions={3}
          vertical
          onChange={props.onChange}
        />
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
