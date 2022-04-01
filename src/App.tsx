import "./App.css";
import { NameForm } from "./Form";
import FunctionalKnob from "./FunctionalKnob";
import { Knob } from "./Knob";

function App() {
  return (
    <div className="App">
      <NameForm name="Julian" />
      <Knob
        size={100}
        numTicks={25}
        degrees={260}
        min={1}
        max={100}
        value={30}
        color={true}
        onChange={(value) => console.log(value)}
      />
      <Knob
        size={50}
        numTicks={25}
        degrees={260}
        min={1}
        max={100}
        value={30}
        color={true}
        onChange={(value) => console.log(value)}
      />

      <FunctionalKnob
        size={100}
        numTicks={25}
        fullAngle={260}
        // maxDegrees={260}
        min={1}
        max={100}
        value={30}
        color={true}
        onChange={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
