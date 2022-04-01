import "./App.css";
import { NameForm } from "./Form";
import Knob from "./Knob";
import { OldKnob } from "./OldKnob";

function App() {
  return (
    <div className="App">
      <NameForm name="Julian" />
      <OldKnob
        size={100}
        numTicks={25}
        degrees={260}
        min={1}
        max={100}
        value={30}
        color={true}
      />
      <OldKnob
        size={50}
        numTicks={25}
        degrees={260}
        min={1}
        max={100}
        value={30}
        color={true}
      />
      <Knob
        min={0}
        max={1023}
        angleOffset={-135}
        arc={270}
        step={1}
        value={200}
      />
    </div>
  );
}

export default App;
