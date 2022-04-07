import { ReactComponent as Saw } from "../assets/saw.svg";
import { ReactComponent as Square } from "../assets/square.svg";
import { ReactComponent as Triangle } from "../assets/triangle.svg";
import Switch from "../Switch";

const HalfWave = () => {
  return (
    <div className="control-group-half-width control-group">
      <div className="control-wrapper">
        <Switch
          value={2}
          numPositions={3}
          vertical
          onChange={(val) => console.log(val)}
        />
        <div className="switch-label-wrapper">
          <ul className="switch-labels">
            <li className="switch-label">
              <div className="switch-value-label">
                <Saw />
              </div>
            </li>
            <li className="switch-label">
              <div className="switch-value-label">
                <Triangle />
              </div>
            </li>
            <li className="switch-label">
              <div className="switch-value-label">
                <Square />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <p className="control-label label">Wave</p>
    </div>
  );
};

export default HalfWave;
