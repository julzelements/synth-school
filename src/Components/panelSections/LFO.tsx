import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";

interface LFOProps {
  wave: number;
  mode: number;
  rate: number;
  intensity: number;
  target: number;
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
      <SwitchContainer paramName="Wave" value={props.wave} onChange={props.onChangeWave} />
      <SwitchContainer
        paramName="Mode"
        value={props.mode}
        onChange={props.onChangeMode}
        labels={[<div>Fast</div>, <div>Slow</div>, <div>1Shot</div>]}
      />
      <Knob color="green" paramName="Rate" value={props.rate} onChange={props.onChangeRate} />
      <Knob
        color="green"
        paramName="Int"
        value={props.intensity}
        onChange={props.onChangeIntensity}
        invertible={true}
        invertedColor="orange"
      />
      <SwitchContainer
        paramName="Target"
        value={props.target}
        onChange={props.onChangeTarget}
        labels={[<div>Pitch</div>, <div>Shape</div>, <div>Cutoff</div>]}
      />
    </div>
  );
};
