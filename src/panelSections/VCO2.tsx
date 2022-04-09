import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";
import { ReactComponent as Saw } from "../assets/saw.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import { ReactComponent as Noise } from "../assets/noise.svg";
import { Oscilator } from "../types";

interface VCO2Props {
  oscilator: Oscilator;
  onChangeWaveType: (value) => void;
  onChangeDutyValue: (value) => void;
  onChangePitchValue: (value) => void;
  onChangeShapeValue: (value) => void;
}

export const VCO2 = (props: VCO2Props) => {
  return (
    <div className="panel-section" id="vco2">
      <div className="panel-group">
        <h2 className="panel-group-label label">VCO2</h2>
        <Wave paramName="Octave" />
        <Knob
          paramName={props.oscilator.pitch.name}
          initialValue={props.oscilator.pitch.value}
          color={true}
          onChange={props.onChangePitchValue}
        />
      </div>
      <div className="panel-group">
        <Wave
          paramName={props.oscilator.wave.name}
          initialValue={props.oscilator.wave.value}
          labels={[<Saw />, <Triangle />, <Noise />]}
          half={true}
        />
        <Wave
          paramName={props.oscilator.duty.name}
          initialValue={props.oscilator.duty.value}
          half={true}
          labels={[<div>Sync</div>, <div>Free</div>, <div>Ring</div>]}
        />
        <Knob
          paramName={props.oscilator.shape.name}
          initialValue={props.oscilator.shape.value}
          color={true}
          onChange={(value) => console.log(value)}
        />
      </div>
    </div>
  );
};
