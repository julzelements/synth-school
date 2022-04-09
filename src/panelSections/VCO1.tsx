import Wave from "../controlGroups/Wave";
import { ReactComponent as Saw } from "../assets/saw.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as Square } from "../assets/square.svg";
import Knob from "../controlGroups/Knob";
import { Oscilator } from "../types";

interface VCO1Props {
  oscilator: Oscilator;
  onChangeWaveType: (value) => void;
  onChangeShapeValue: (value) => void;
}

export const VCO1 = (props: VCO1Props) => {
  return (
    <div className="panel-section" id="vco1">
      <h2 className="panel-group-label label">VCO1</h2>
      <div className="control-group">
        <Wave
          paramName={props.oscilator.wave.name}
          initialValue={props.oscilator.wave.value}
          onChange={props.onChangeShapeValue}
          labels={[<Saw />, <Triangle />, <Square />]}
        />
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName={props.oscilator.shape.name}
            initialParam={props.oscilator.shape.value}
            color={true}
            onChange={props.onChangeWaveType}
          />
        </div>
      </div>
    </div>
  );
};
