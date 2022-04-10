import { KeyboardOctaveLeds } from "../controlGroups/KeyboardOctaveLeds";
import Knob from "../controlGroups/Knob";
import Switch from "../Switch";
import { Parameter } from "../types";

interface MasterProps {
  drive: number;
  onChangeDrive: (value) => void;
  onChangeOctave: (value) => void;
  octave: number;
}

export const Master = (props: MasterProps) => {
  return (
    <div className="panel-section" id="master">
      <h2 className="panel-group-label label">Master</h2>
      <Knob
        paramName="Volume"
        initialValue={0}
        onChange={(value) => console.log(value)}
      />
      <Knob
        paramName="Drive"
        initialValue={props.drive}
        onChange={props.onChangeDrive}
      />

      <KeyboardOctaveLeds octave={props.octave} />
      <div className="control-group" title="KeyboardOctave">
        <div className="control-wrapper">
          <Switch
            value={2}
            numPositions={5}
            vertical={false}
            onChange={props.onChangeOctave}
          />
          <p className="control-label label">Octave</p>
        </div>
      </div>
    </div>
  );
};
