import { ReactElement } from "react";
import { ReactComponent as Saw } from "../../assets/saw.svg";
import { ReactComponent as Square } from "../../assets/square.svg";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
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
      transposedValue = props.value;
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
