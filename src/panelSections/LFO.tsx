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
      <SwitchContainer
        paramName={props.wave.name}
        value={props.wave.value}
        onChange={props.onChangeWave}
      />
      <SwitchContainer
        paramName="Mode"
        value={props.mode.value}
        onChange={props.onChangeMode}
        labels={[<div>Fast</div>, <div>Slow</div>, <div>1Shot</div>]}
      />
      <Knob
        paramName={props.rate.name}
        value={props.rate.value}
        onChange={props.onChangeRate}
      />
      <Knob
        paramName={props.intensity.name}
        value={props.intensity.value}
        onChange={props.onChangeIntensity}
      />
      <SwitchContainer
        paramName={props.target.name}
        value={props.target.value}
        onChange={props.onChangeTarget}
        labels={[<div>Pitch</div>, <div>Shape</div>, <div>Cutoff</div>]}
      />
    </div>
  );
};
