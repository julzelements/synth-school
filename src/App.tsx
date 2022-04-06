import "./App.css";
import Knob from "./Knob";
import data from "./data.json";
import { ReactComponent as Saw } from "./assets/saw.svg";
import { ReactComponent as Square } from "./assets/square.svg";
import { ReactComponent as Triangle } from "./assets/triangle.svg";
import Switch from "./Switch";

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="section-wrapper">
        <div className="panel">
          <header>
            <h1 className="program-title">
              <span>Init Program</span>
            </h1>
          </header>
          <div className="panel-controls">
            <div className="panel-section">
              <h2 className="panel-group-label label">Mixer</h2>
              <div className="control-group">
                <div className="control-wrapper">
                  <Knob
                    paramName="0%"
                    fullAngle={260}
                    paramMin={0}
                    paramMax={1023}
                    initialParam={0}
                    color={true}
                    onChange={(value) => console.log(value)}
                  />
                  <p className="control-label label">VCO1</p>
                </div>
              </div>
              <div className="control-group">
                <div className="control-wrapper">
                  <Knob
                    paramName="0%"
                    fullAngle={260}
                    paramMin={0}
                    paramMax={1023}
                    initialParam={0}
                    color={true}
                    onChange={(value) => console.log(value)}
                  />
                  <p className="control-label label">VCO2</p>
                </div>
              </div>
            </div>
            <div className="panel-section">
              <h2 className="panel-group-label label">Filter</h2>
              <div className="control-group">
                <div className="control-wrapper">
                  <Knob
                    paramName="0%"
                    fullAngle={260}
                    paramMin={0}
                    paramMax={1023}
                    initialParam={0}
                    color={true}
                    onChange={(value) => console.log(value)}
                  />
                  <p className="control-label label">Cutoff</p>
                </div>
              </div>
              <div className="control-group" title="Sawtooth">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
