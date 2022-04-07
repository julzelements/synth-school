import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";

export const VCO2 = () => {
  return (
    <div className="panel-section" id="vco2">
      <div className="panel-group">
        <h2 className="panel-group-label label">VCO2</h2>
        <div className="control-group">
          <Wave />
        </div>
        <div className="control-wrapper">
          <Knob
            label="Shape"
            paramName="0%"
            fullAngle={260}
            paramMin={0}
            paramMax={1023}
            initialParam={0}
            color={true}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </div>
  );
};
