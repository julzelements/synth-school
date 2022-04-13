import SwitchContainer from "../controlGroups/SwitchContainer";
import Knob from "../controlGroups/Knob";
import { ReactComponent as Saw } from "../assets/saw.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as Noise } from "../assets/noise.svg";
import { Oscilator } from "../types";
import VCO2Octave from "../controlGroups/VCO2Octave";

interface VCO2Props {
  oscilator: Oscilator;
  octave: number;
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
        <VCO2Octave
          paramName="Octave"
          value={props.octave}
          onChange={props.onChangeOctave}
        />
        <Knob
          paramName={props.oscilator.pitch.name}
          value={props.oscilator.pitch.value}
          onChange={props.onChangePitch}
        />
      </div>
      <div className="panel-group">
        <SwitchContainer
          paramName={props.oscilator.wave.name}
          value={props.oscilator.wave.value}
          labels={[<Saw />, <Triangle />, <Noise />]}
          half={true}
          onChange={props.onChangeWave}
        />
        <SwitchContainer
          paramName={props.oscilator.duty.name}
          value={props.oscilator.duty.value}
          half={true}
          labels={[<div>Sync</div>, <div>Free</div>, <div>Ring</div>]}
          onChange={props.onChangeDuty}
        />
        <Knob
          paramName={props.oscilator.shape.name}
          value={props.oscilator.shape.value}
          onChange={props.onChangeShape}
        />
      </div>
    </div>
  );
};
