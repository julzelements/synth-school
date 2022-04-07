import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";

export const EGLFO = () => {
  return (
    <div className="panel-section" id="eglfo">
      <div className="panel-group">
        <h2 className="panel-group-label label">EG</h2>
        <Wave />
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
        <Wave />
      </div>
      <div className="panel-group">
        <h2 className="panel-group-label label">LFO</h2>
        <Wave />
        <Wave />
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
        <Wave />
      </div>
    </div>
  );
};
