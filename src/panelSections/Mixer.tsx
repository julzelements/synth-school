import Knob from "../controlGroups/Knob";

export const Mixer = () => {
  return (
    <div className="panel-section" id="mixer">
      <h2 className="panel-group-label label">Mixer</h2>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            label="VCO1"
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
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            label="VCO2"
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
