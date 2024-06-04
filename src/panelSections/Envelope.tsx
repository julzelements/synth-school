import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";
import { ReactComponent as AttackDecay } from "../assets/attackdecay.svg";
import { ReactComponent as AttackGateDecay } from "../assets/attackgatedecay.svg";
import { ReactComponent as Gate } from "../assets/gate.svg";

interface EnvelopeProps {
  type: number;
  attack: number;
  decay: number;
  intensity: number;
  target: number;
  onChangeType: (value) => void;
  onChangeAttack: (value) => void;
  onChangeDecay: (value) => void;
  onChangeIntensity: (value) => void;
  onChangeTarget: (value) => void;
}

export const Envelope = (props: EnvelopeProps) => {
  return (
    <div className="panel-group">
      <h2 className="panel-group-label label">EG</h2>
      <SwitchContainer
        paramName="Type"
        value={props.type}
        onChange={props.onChangeType}
        labels={[<AttackDecay />, <AttackGateDecay />, <Gate />]}
      />
      <Knob color="yellow" paramName="Attack" value={props.attack} onChange={props.onChangeAttack} />
      <Knob color="yellow" paramName="Decay" value={props.decay} onChange={props.onChangeDecay} />
      <Knob color="yellow" paramName="Int" value={props.intensity} onChange={props.onChangeIntensity} />
      <SwitchContainer
        paramName="Target"
        value={props.target}
        onChange={props.onChangeTarget}
        labels={[<div>Pitch</div>, <div>Pitch 2</div>, <div>Cutoff</div>]}
      />
    </div>
  );
};
