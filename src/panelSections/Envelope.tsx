import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";
import { Parameter } from "../types";
import { ReactComponent as AD } from "../assets/ad.svg";
import { ReactComponent as AGD } from "../assets/agd.svg";
import { ReactComponent as Gate } from "../assets/gate.svg";

interface EnvelopeProps {
  type: Parameter;
  attack: Parameter;
  decay: Parameter;
  intensity: Parameter;
  target: Parameter;
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
        paramName={props.type.name}
        value={props.type.value}
        onChange={props.onChangeType}
        labels={[<div>AD</div>, <div>AGD</div>, <div>Gate</div>]}
        // labels={[<AD />, <AGD />, <Gate />]}
      />
      <Knob
        paramName={props.attack.name}
        value={props.attack.value}
        onChange={props.onChangeAttack}
      />
      <Knob
        paramName={props.decay.name}
        value={props.decay.value}
        onChange={props.onChangeDecay}
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
        labels={[<div>Pitch</div>, <div>Pitch 2</div>, <div>Cutoff</div>]}
      />
    </div>
  );
};
