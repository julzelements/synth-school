import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";

import VCO2Octave from "../controlGroups/VCO2Octave";
import Noise from "assets/Noise";
import Saw from "assets/Saw";
import Triangle from "assets/Triangle";
interface VCO2Props {
  octave: number;
  pitch: number;
  wave: number;
  duty: number;
  shape: number;
  onChangeOctave: (value: number) => void;
  onChangeWave: (value: number) => void;
  onChangeDuty: (value: number) => void;
  onChangePitch: (value: number) => void;
  onChangeShape: (value: number) => void;
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
          labels={[<Saw key="saw" />, <Triangle key="triangle" />, <Noise key="noise" />]}
          half={true}
          onChange={props.onChangeWave}
        />
        <SwitchContainer
          paramName="Duty"
          value={props.duty}
          half={true}
          labels={[<div key="sync">Sync</div>, <div key="free">Free</div>, <div key="ring">Ring</div>]}
          onChange={props.onChangeDuty}
        />
        <Knob color="red" paramName="Shape" value={props.shape} onChange={props.onChangeShape} />
      </div>
    </div>
  );
};
