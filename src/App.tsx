import "./App.css";
import Knob from "./Knob";
import data from "./data.json";
import { ReactComponent as Saw } from "./assets/saw.svg";
import { ReactComponent as Square } from "./assets/square.svg";
import { ReactComponent as Triangle } from "./assets/triangle.svg";

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
                  <div className="switch-range switch-range-vertical">
                    <div
                      className="switch-value"
                      style={{ bottom: "36px" }}
                    ></div>
                  </div>
                  <div className="switch-label-wrapper">
                    <ul className="switch-labels">
                      <li className="switch-label">
                        <div className="switch-value-label">
                          <svg height="10" width="10" viewBox="0 0 6.216 3.755">
                            <Saw />
                          </svg>
                        </div>
                      </li>
                      <li className="switch-label">
                        <div className="switch-value-label">
                          <svg height="10" width="10" viewBox="0 0 7.185 3.68">
                            <Saw />
                          </svg>
                        </div>
                      </li>
                      <li className="switch-label">
                        <div className="switch-value-label">
                          <svg height="10" width="10" viewBox="0 0 7.044 3.567">
                            <Saw />
                          </svg>
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
