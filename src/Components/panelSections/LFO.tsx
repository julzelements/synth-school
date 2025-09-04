import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";

interface LFOProps {
  wave: number;
  mode: number;
  rate: number;
  intensity: number;
  target: number;
  onChangeWave: (value: number) => void;
  onChangeMode: (value: number) => void;
  onChangeRate: (value: number) => void;
  onChangeIntensity: (value: number) => void;
  onChangeTarget: (value: number) => void;
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
        labels={[<div key="fast">Fast</div>, <div key="slow">Slow</div>, <div key="1shot">1Shot</div>]}
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
        labels={[<div key="pitch">Pitch</div>, <div key="shape">Shape</div>, <div key="cutoff">Cutoff</div>]}
      />
    </div>
  );
};
