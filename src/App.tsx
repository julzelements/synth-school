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
import { Envelope } from "./panelSections/Envelope";
import { LFO } from "./panelSections/LFO";
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

  const [envType, setEnvType] = useState(() => props.envelope.type);
  const [envAttack, setEnvAttack] = useState(() => props.envelope.attack);
  const [envDecay, setEnvDecay] = useState(() => props.envelope.decay);
  const [envIntensity, setEnvIntensity] = useState(
    () => props.envelope.intensity
  );
  const [envTarget, setEnvTarget] = useState(() => props.envelope.target);

  const [lfoWave, setLfoWave] = useState(() => props.lfo.wave);
  const [lfoMode, setLfoMode] = useState(() => props.lfo.mode);
  const [lfoRate, setLfoRate] = useState(() => props.lfo.rate);
  const [lfoIntensity, setLfoIntensity] = useState(() => props.lfo.intensity);
  const [lfoTarget, setLfoTarget] = useState(() => props.lfo.target);

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
            <div className="panel-section" id="eglfo">
              <Envelope
                type={props.envelope.type}
                attack={props.envelope.attack}
                decay={props.envelope.decay}
                intensity={props.envelope.intensity}
                target={props.envelope.target}
                onChangeType={setEnvType}
                onChangeAttack={setEnvAttack}
                onChangeDecay={setEnvDecay}
                onChangeIntensity={setEnvIntensity}
                onChangeTarget={setEnvTarget}
              />
              <LFO
                wave={props.lfo.wave}
                mode={props.lfo.mode}
                rate={props.lfo.rate}
                intensity={props.lfo.intensity}
                target={props.lfo.target}
                onChangeWave={setLfoWave}
                onChangeMode={setLfoMode}
                onChangeRate={setLfoRate}
                onChangeIntensity={setLfoIntensity}
                onChangeTarget={setLfoTarget}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
