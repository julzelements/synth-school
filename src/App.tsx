import "./App.css";
import data from "./data.json";
import { Global } from "./panelSections/Global";
import { VCO1 } from "./panelSections/VCO1";
import { Mixer } from "./panelSections/Mixer";
import { Filter } from "./panelSections/Filter";
import { VCO2 } from "./panelSections/VCO2";

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
            <Global />
            <VCO1 />
            <VCO2 />
            <Mixer />
            <Filter />
            {/* <Mixer />
            <Filter /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
