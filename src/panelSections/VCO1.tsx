import Wave from "../controlGroups/Wave";
import Knob from "../controlGroups/Knob";

interface VCO1Props {
  shape: number;
  wave: number;
}

export const VCO1 = (props: VCO1Props) => {
  return (
    <div className="panel-section" id="vco1">
      <h2 className="panel-group-label label">VCO1</h2>
      <div className="control-group">
        <Wave />
      </div>
      <div className="control-group">
        <div className="control-wrapper">
          <Knob
            paramName="shape"
            initialParam={props.shape}
            color={true}
            onChange={(value) => console.log(value)}
          />
        </div>
      </div>
    </div>
  );
};
