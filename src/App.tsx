import "./App.css";
import { NameForm } from "./Form";
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
      />
      <Knob
        size={50}
        numTicks={25}
        degrees={260}
        min={1}
        max={100}
        value={30}
        color={true}
      />
    </div>
  );
}

export default App;
