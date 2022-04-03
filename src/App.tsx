import "./App.css";
import Knob from "./Knob";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <div className="filter">
        <Knob
          paramName="0%"
          size={50}
          fullAngle={260}
          paramMin={0}
          paramMax={1023}
          initialParam={0}
          color={true}
          onChange={(value) => console.log(value)}
        />
        <div style={{ width: "50px" }}></div>
        <Knob
          paramName="50%"
          size={50}
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
          size={50}
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
