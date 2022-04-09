import Knob from "../controlGroups/Knob";

export const Filter = () => {
  return (
    <div className="panel-section" id="filter">
      <h2 className="panel-group-label label">Filter</h2>
      <Knob
        paramName="Cutoff"
        initialValue={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        paramName="Resonance"
        initialValue={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
};
