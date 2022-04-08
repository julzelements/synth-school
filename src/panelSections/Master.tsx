import KeyboardOctaveLeds from "../controlGroups/KeyboardOctaveLeds";
import Knob from "../controlGroups/Knob";
import Switch from "../Switch";
import { Parameter } from "../types";

interface MasterProps {
  parameters: Parameter;
  onChange: (value) => void;
}

export const Master = (props: MasterProps) => {
  return (
    <div className="panel-section" id="master">
      <h2 className="panel-group-label label">Master</h2>
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
        label={props.parameters.name}
        paramName="0%"
        fullAngle={260}
        paramMin={0}
        paramMax={1023}
        initialParam={props.parameters.value}
        color={true}
        onChange={props.onChange}
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
