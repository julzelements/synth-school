import Wave from "../controlGroups/Wave";
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
      <Wave />
      <Wave />
      <Knob
        paramName="Shape"
        initialValue={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        paramName="Shape"
        initialValue={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Wave />
    </div>
  );
};
