import SwitchContainer from "@/components/controlGroups/SwitchContainer";
import Knob from "@/components/controlGroups/Knob";
import AttackDecay from "@/assets/AttackDecay";
import AttackGateDecay from "@/assets/AttackGateDecay";
import Gate from "@/assets/Gate";

interface EnvelopeProps {
  type: number;
  attack: number;
  decay: number;
  intensity: number;
  target: number;
  onChangeType: (value: number) => void;
  onChangeAttack: (value: number) => void;
  onChangeDecay: (value: number) => void;
  onChangeIntensity: (value: number) => void;
  onChangeTarget: (value: number) => void;
}

export const Envelope = (props: EnvelopeProps) => {
  return (
    <div className="panel-group">
      <h2 className="panel-group-label label">EG</h2>
      <SwitchContainer
        paramName="Type"
        value={props.type}
        onChange={props.onChangeType}
        labels={[<AttackDecay key="attack-decay" />, <AttackGateDecay key="attack-gate-decay" />, <Gate key="gate" />]}
      />
      <Knob color="yellow" paramName="Attack" value={props.attack} onChange={props.onChangeAttack} />
      <Knob color="yellow" paramName="Decay" value={props.decay} onChange={props.onChangeDecay} />
      <Knob
        color="yellow"
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
        labels={[<div key="pitch">Pitch</div>, <div key="pitch2">Pitch 2</div>, <div key="cutoff">Cutoff</div>]}
      />
    </div>
  );
};
