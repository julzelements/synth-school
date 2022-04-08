import Knob from "../controlGroups/Knob";

export const Mixer = () => {
  return (
    <div className="panel-section" id="mixer">
      <h2 className="panel-group-label label">Mixer</h2>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName="VCO1"
            initialParam={0}
            color={true}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName="VCO2"
            initialParam={0}
            color={true}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </div>
  );
};
