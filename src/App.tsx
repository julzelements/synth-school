import "./App.css";

// JULZ! You need to.
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
  const [vco2DutyValue, setVco2DutyValue] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 1)
  );
  const [vco2DutyPitchValue, setVco2DutyPitchValue] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 1)
  );
  const [vco2ShapeValue, setVco2ShapeValue] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 1)
  );
  const [vco1Level, setVco1Level] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 1)
  );
  const [vco2Level, setVco2Level] = useState(() =>
    props.oscilators.find((params) => params.wave.oscilator === 1)
  );
  const [cutoff, setCutoff] = useState(() => props.filter.cutoff);
  const [resonance, setResonance] = useState(() => props.filter.resonance);

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
              onChangeWaveType={setVco2WaveType}
              onChangeDutyValue={setVco2DutyValue}
              onChangePitchValue={setVco2DutyPitchValue}
              onChangeShapeValue={setVco2ShapeValue}
            />
            <Mixer
              vco1Level={
                props.oscilators.find((params) => params.wave.oscilator === 0)
                  .level
              }
              vco2Level={
                props.oscilators.find((params) => params.wave.oscilator === 1)
                  .level
              }
              onChangeVCO1LevelValue={setVco1Level}
              onChangeVCO2LevelValue={setVco2Level}
            />
            <Filter
              cutoff={props.filter.cutoff}
              resonance={props.filter.resonance}
              onChangeCutoff={setCutoff}
              onChangeResonance={setResonance}
            />
            <EGLFO />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
