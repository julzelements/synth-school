import Knob from "../controlGroups/Knob";

export const Filter = () => {
  return (
    <div className="panel-section" id="filter">
      <h2 className="panel-group-label label">Filter</h2>
      <Knob
        label="Cutoff"
        paramName="0%"
        fullAngle={260}
        paramMin={0}
        paramMax={1023}
        initialParam={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        label="Resonance"
        paramName="0%"
        fullAngle={260}
        paramMin={0}
        paramMax={1023}
        initialParam={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
};
