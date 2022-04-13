import SwitchContainer from "../controlGroups/SwitchContainer";
import { ReactComponent as Saw } from "../assets/saw.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as Square } from "../assets/square.svg";
import Knob from "../controlGroups/Knob";

interface VCO1Props {
  waveType: number;
  shapeValue: number;
  onChangeWaveType: (value) => void;
  onChangeShapeValue: (value) => void;
}

export const VCO1 = (props: VCO1Props) => {
  return (
    <div className="panel-section" id="vco1">
      <h2 className="panel-group-label label">VCO1</h2>
      <div className="control-group">
        <SwitchContainer
          paramName="Wave"
          initialValue={props.waveType}
          onChange={props.onChangeWaveType}
          labels={[<Saw />, <Triangle />, <Square />]}
        />
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName="Shape"
            value={props.shapeValue}
            onChange={props.onChangeShapeValue}
          />
        </div>
      </div>
    </div>
  );
};
