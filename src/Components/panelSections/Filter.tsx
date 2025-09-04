import Knob from "../controlGroups/Knob";
interface FilterProps {
  cutoff: number;
  resonance: number;
  onChangeCutoff: (value: number) => void;
  onChangeResonance: (value: number) => void;
}

export const Filter = (props: FilterProps) => {
  return (
    <div className="panel-section" id="filter">
      <h2 className="panel-group-label label">Filter</h2>
      <Knob color="blue" paramName="Cutoff" value={props.cutoff} onChange={props.onChangeCutoff} />
      <Knob color="blue" paramName="Resonance" value={props.resonance} onChange={props.onChangeResonance} />
    </div>
  );
};
