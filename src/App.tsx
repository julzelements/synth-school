import "./App.css";
import Knob from "./Knob";
import data from "./data.json";

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
                  <p className="control-label label">Resonance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
