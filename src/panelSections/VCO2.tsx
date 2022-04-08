import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";
import HalfWave from "../controlGroups/HalfWave";

export const VCO2 = () => {
  return (
    <div className="panel-section" id="vco2">
      <div className="panel-group">
        <h2 className="panel-group-label label">VCO2</h2>
        <Wave />
        <Knob
          paramName="Shape"
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
      </div>
      <div className="panel-group">
        <HalfWave />
        <HalfWave />
        <Knob
          paramName="Shape"
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
      </div>
    </div>
  );
};
