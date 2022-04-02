import "./App.css";
import Knob from "./Knob";

function App() {
  return (
    <div className="App">
      <Knob
        size={100}
        fullAngle={260}
        paramMin={1}
        paramMax={100}
        initialParam={30}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        size={100}
        fullAngle={180}
        paramMin={1}
        paramMax={100}
        initialParam={0}
        color={true}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
