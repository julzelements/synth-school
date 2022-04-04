import "./App.css";
import Knob from "./Knob";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="filter">
        <div className="panel-controls">
          <div className="panel-section">
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
                <p className="control-label label">Filter</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "50px" }}></div>
        <Knob
          paramName="50%"
          fullAngle={260}
          paramMin={0}
          paramMax={1023}
          initialParam={512}
          color={true}
          onChange={(value) => console.log(value)}
        />
        <div style={{ width: "50px" }}></div>
        <Knob
          paramName="100%"
          fullAngle={260}
          paramMin={0}
          paramMax={1023}
          initialParam={1023}
          color={true}
          onChange={(value) => console.log(value)}
        />
      </div>
    </div>
  );
}

export default App;
