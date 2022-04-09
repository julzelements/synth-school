import "./App.css";

// JULZ! You need to.
// Fix up the on change functions for VCO2
// Rename <Wave/> to <Switch/>
// Do the octaves.
// Draw the rest of the owl.

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
  const [vco1ShapeValue, setVco1ShapeValue] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 0)
  );
  const [vco1WaveType, setVco1WaveType] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 0)
  );
  const [vco2WaveType, setVco2WaveType] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 1)
  );

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
            <Master drive={props.drive} onChange={setDrive} />
            <VCO1
              oscilator={props.oscilators.find(
                (params) => params.wave.oscilator === 0
              )}
              onChangeWaveType={setVco1WaveType}
              onChangeShapeValue={setVco1ShapeValue}
            />
            <VCO2
              oscilator={props.oscilators.find(
                (params) => params.wave.oscilator === 1
              )}
              onChangeWaveType={function (value: any): void {
                throw new Error("Function not implemented.");
              }}
              onChangeDutyValue={function (value: any): void {
                throw new Error("Function not implemented.");
              }}
              onChangePitchValue={function (value: any): void {
                throw new Error("Function not implemented.");
              }}
              onChangeShapeValue={function (value: any): void {
                throw new Error("Function not implemented.");
              }}
            />
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
