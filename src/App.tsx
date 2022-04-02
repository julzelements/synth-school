import "./App.css";
import Knob from "./Knob";
import data from "./data.json";

function App() {
  console.log(data);
  return (
    <div className="App">
      <Knob
        paramName={data.filter.cutoff.name}
        size={100}
        fullAngle={260}
        paramMin={0}
        paramMax={1023}
        initialParam={data.filter.cutoff.value}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        paramName={data.filter.resonance.name}
        size={100}
        fullAngle={260}
        paramMin={0}
        paramMax={1023}
        initialParam={data.filter.resonance.value}
        color={true}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
