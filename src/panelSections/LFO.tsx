import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";
import { Parameter } from "../types";

interface LFOProps {
  wave: Parameter;
  mode: Parameter;
  rate: Parameter;
  intensity: Parameter;
  target: Parameter;
  onChangeWave: (value) => void;
  onChangeMode: (value) => void;
  onChangeRate: (value) => void;
  onChangeIntensity: (value) => void;
  onChangeTarget: (value) => void;
}

export const LFO = (props: LFOProps) => {
  return (
    <div className="panel-group">
      <h2 className="panel-group-label label">LFO</h2>
      <SwitchContainer />
      <SwitchContainer />
      <Knob
        paramName="Shape"
        initialValue={0}
        onChange={(value) => console.log(value)}
      />
      <Knob
        paramName="Shape"
        initialValue={0}
        onChange={(value) => console.log(value)}
      />
      <SwitchContainer />
    </div>
  );
};
