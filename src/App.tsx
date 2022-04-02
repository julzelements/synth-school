import "./App.css";
import Knob from "./Knob";

function App() {
  return (
    <div className="App">
      <Knob
        size={100}
        fullAngle={260}
        min={1}
        max={100}
        value={50}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        size={100}
        fullAngle={180}
        min={1}
        max={100}
        value={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
