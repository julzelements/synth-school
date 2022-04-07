import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";

export const VCO1 = () => {
  return (
    <div className="panel-section" id="vco1">
      <h2 className="panel-group-label label">VCO1</h2>
      <div className="control-group">
        <Wave />
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            label="shape"
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
