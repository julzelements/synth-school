import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";

export const EGLFO = () => {
  return (
    <div className="panel-section" id="eglfo">
      <div className="panel-group">
        <h2 className="panel-group-label label">EG</h2>
        <Wave />
        <Knob
          paramName="Shape"
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
        <Knob
          paramName="Shape"
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
        <Knob
          paramName="Shape"
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
        <Wave />
      </div>
      <div className="panel-group">
        <h2 className="panel-group-label label">LFO</h2>
        <Wave />
        <Wave />
        <Knob
          paramName="Shape"
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
        <Knob
          paramName="Shape"
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
        <Wave />
      </div>
    </div>
  );
};
