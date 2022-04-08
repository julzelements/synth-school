import "./App.css";
import { Master } from "./panelSections/Master";
import { VCO1 } from "./panelSections/VCO1";
import { Mixer } from "./panelSections/Mixer";
import { Filter } from "./panelSections/Filter";
import { VCO2 } from "./panelSections/VCO2";
import { EGLFO } from "./panelSections/EGLFO";
import { KorgProgramDump } from "./types";
import { useState } from "react";

const App = (props: KorgProgramDump) => {
  const [drive, setDrive] = useState(() => props.drive.value);

  return (
    <div className="App">
      <div className="section-wrapper">
        <div className="panel">
          <header>
            <h1 className="program-title">
              <span>{props.patchName}</span>
            </h1>
          </header>
          <div className="panel-controls">
            <Master parameters={props.drive} onChange={setDrive} />
            <VCO1 />
            <VCO2 />
            <Mixer />
            <Filter />
            <EGLFO />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
