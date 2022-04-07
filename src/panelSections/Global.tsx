import KeyboardOctaveLeds from "../controlGroups/KeyboardOctaveLeds";
import Knob from "../controlGroups/Knob";
import Switch from "../Switch";

export const Global = () => {
  return (
    <div className="panel-section" id="global">
      <h2 className="panel-group-label label">Global</h2>
      <Knob
        label="Volume"
        paramName="0%"
        fullAngle={260}
        paramMin={0}
        paramMax={1023}
        initialParam={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        label="Drive"
        paramName="0%"
        fullAngle={260}
        paramMin={0}
        paramMax={1023}
        initialParam={0}
        color={true}
        onChange={(value) => console.log(value)}
      />

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
