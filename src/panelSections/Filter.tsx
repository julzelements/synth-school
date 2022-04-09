import Knob from "../controlGroups/Knob";
import { Parameter } from "../types";

interface FilterProps {
  cutoff: Parameter;
  resonance: Parameter;
  onChangeCutoff: (value) => void;
  onChangeResonance: (value) => void;
}

export const Filter = (props: FilterProps) => {
  return (
    <div className="panel-section" id="filter">
      <h2 className="panel-group-label label">Filter</h2>
      <Knob
        paramName={props.cutoff.name}
        initialValue={props.cutoff.value}
        color={true}
        onChange={props.onChangeCutoff}
      />
      <Knob
        paramName={props.resonance.name}
        initialValue={props.resonance.value}
        color={true}
        onChange={props.onChangeResonance}
      />
    </div>
  );
};
