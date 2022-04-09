import Knob from "../controlGroups/Knob";
import { Parameter } from "../types";

interface MixerProps {
  vco1Level: Parameter;
  vco2Level: Parameter;
  onChangeVCO1LevelValue: (value) => void;
  onChangeVCO2LevelValue: (value) => void;
}

export const Mixer = (props: MixerProps) => {
  return (
    <div className="panel-section" id="mixer">
      <h2 className="panel-group-label label">Mixer</h2>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName={props.vco1Level.name}
            initialValue={props.vco1Level.value}
            color={true}
            onChange={props.onChangeVCO1LevelValue}
          />
        </div>
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName={props.vco2Level.name}
            initialValue={props.vco2Level.value}
            color={true}
            onChange={props.onChangeVCO2LevelValue}
          />
        </div>
      </div>
    </div>
  );
};
