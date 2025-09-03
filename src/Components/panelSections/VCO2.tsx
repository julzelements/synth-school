import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";
import { ReactComponent as Saw } from "../../assets/saw.svg";
import { ReactComponent as Triangle } from "../../assets/triangle.svg";
import { ReactComponent as Noise } from "../../assets/noise.svg";
import VCO2Octave from "../controlGroups/VCO2Octave";

interface VCO2Props {
  octave: number;
  pitch: number;
  wave: number;
  duty: number;
  shape: number;
  onChangeOctave: (value) => void;
  onChangeWave: (value) => void;
  onChangeDuty: (value) => void;
  onChangePitch: (value) => void;
  onChangeShape: (value) => void;
}

export const VCO2 = (props: VCO2Props) => {
  return (
    <div className="panel-section" id="vco2">
      <div className="panel-group">
        <h2 className="panel-group-label label">VCO2</h2>
        <VCO2Octave paramName="Octave" value={props.octave} onChange={props.onChangeOctave} />
        <Knob color="red" paramName="Pitch" value={props.pitch} onChange={props.onChangePitch} />
      </div>
      <div className="panel-group">
        <SwitchContainer
          paramName="Wave"
          value={props.wave}
          labels={[<Saw />, <Triangle />, <Noise />]}
          half={true}
          onChange={props.onChangeWave}
        />
        <SwitchContainer
          paramName="Duty"
          value={props.duty}
          half={true}
          labels={[<div>Sync</div>, <div>Free</div>, <div>Ring</div>]}
          onChange={props.onChangeDuty}
        />
        <Knob color="red" paramName="Shape" value={props.shape} onChange={props.onChangeShape} />
      </div>
    </div>
  );
};
