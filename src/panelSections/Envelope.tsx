import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";
import { Parameter } from "../types";

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
