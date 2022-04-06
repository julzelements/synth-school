import KeyboardOctaveLeds from "../controlGroups/KeyboardOctaveLeds";
import Knob from "../Knob";
import Switch from "../Switch";

export const Master = () => {
  return (
    <div className="panel-section">
      <h2 className="panel-group-label label">Master</h2>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName="0%"
            fullAngle={260}
            paramMin={0}
            paramMax={1023}
            initialParam={0}
            color={true}
            onChange={(value) => console.log(value)}
          />
          <p className="control-label label">Volume</p>
        </div>
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName="0%"
            fullAngle={260}
            paramMin={0}
            paramMax={1023}
            initialParam={0}
            color={true}
            onChange={(value) => console.log(value)}
          />
          <p className="control-label label">Drive</p>
        </div>
      </div>
      <KeyboardOctaveLeds />
      <div className="control-group" title="KeyboardOctave">
        <div className="control-wrapper">
          <Switch
            value={2}
            numPositions={5}
            vertical={false}
            onChange={(val) => console.log(val)}
          />
          <p className="control-label label">Octave</p>
        </div>
      </div>
    </div>
  );
};
