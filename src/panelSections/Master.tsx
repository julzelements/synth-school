import { VCO1Octave } from "../controlGroups/VCO1Octave";
import Knob from "../controlGroups/Knob";
import Switch from "../Switch";

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
      <Knob paramName="Volume" value={0} onChange={(value) => console.log(value)} />
      <Knob paramName="Drive" value={props.drive} onChange={props.onChangeDrive} />

      <VCO1Octave octave={props.octave} />
      <div className="control-group" title="KeyboardOctave">
        <div className="control-wrapper">
          <Switch value={props.octave} numPositions={5} vertical={false} onChange={props.onChangeOctave} />
          <p className="control-label label">Octave</p>
        </div>
      </div>
    </div>
  );
};
