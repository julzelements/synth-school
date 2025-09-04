import Knob from "../controlGroups/Knob";

interface MixerProps {
  vco1Level: number;
  vco2Level: number;
  onChangeVCO1LevelValue: (value: number) => void;
  onChangeVCO2LevelValue: (value: number) => void;
}

export const Mixer = (props: MixerProps) => {
  return (
    <div className="panel-section" id="mixer">
      <h2 className="panel-group-label label">Mixer</h2>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob color="red" paramName="VCO1" value={props.vco1Level} onChange={props.onChangeVCO1LevelValue} />
        </div>
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob color="red" paramName="VCO2" value={props.vco2Level} onChange={props.onChangeVCO2LevelValue} />
        </div>
      </div>
    </div>
  );
};
