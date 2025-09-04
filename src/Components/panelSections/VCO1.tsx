import SwitchContainer from "../controlGroups/SwitchContainer";

import Knob from "../controlGroups/Knob";
import Saw from "assets/Saw";
import Square from "assets/Square";
import Triangle from "assets/Triangle";

interface VCO1Props {
  wave: number;
  shape: number;
  onChangeWave: (value: number) => void;
  onChangeShape: (value: number) => void;
}

export const VCO1 = (props: VCO1Props) => {
  return (
    <div className="panel-section" id="vco1">
      <h2 className="panel-group-label label">VCO1</h2>
      <div className="control-group">
        <SwitchContainer
          paramName="Wave"
          value={props.wave}
          onChange={props.onChangeWave}
          labels={[<Saw key="saw" />, <Triangle key="triangle" />, <Square key="square" />]}
        />
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob color="red" paramName="Shape" value={props.shape} onChange={props.onChangeShape} />
        </div>
      </div>
    </div>
  );
};
