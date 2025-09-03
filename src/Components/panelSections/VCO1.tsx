import SwitchContainer from "../controlGroups/SwitchContainer";
import { ReactComponent as Saw } from "../../assets/saw.svg";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
import { ReactComponent as Square } from "../../assets/square.svg";
import Knob from "../controlGroups/Knob";

interface VCO1Props {
  wave: number;
  shape: number;
  onChangeWave: (value) => void;
  onChangeShape: (value) => void;
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
          labels={[<Saw />, <Triangle />, <Square />]}
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
