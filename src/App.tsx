import "./App.css";
// JULZ!
// Keyboard octaves do not refresh.

import { Master } from "./panelSections/Master";
import { VCO1 } from "./panelSections/VCO1";
import { Mixer } from "./panelSections/Mixer";
import { Filter } from "./panelSections/Filter";
import { VCO2 } from "./panelSections/VCO2";
import { Envelope } from "./panelSections/Envelope";
import { LFO } from "./panelSections/LFO";
import { KorgProgramDump } from "./types";
import { useState } from "react";
import afxAcid from "./patches/<afx acid3>.json";
import injection from "./patches/Injection.json";

const App = (props: KorgProgramDump) => {
  const selectPatch = (patch: KorgProgramDump) => {
    console.log(patch.patchName);
    setVco1OctaveValue(patch.oscilators[0].octave.value);
    setVco2OctaveValue(patch.oscilators[1].octave.value);
    setDrive(patch.drive.value);
    setVco1ShapeValue(patch.oscilators[0].shape.value);
    setVco1WaveType(patch.oscilators[0].wave.value);
  };

  const [drive, setDrive] = useState(() => props.drive.value);
  const [vco1OctaveValue, setVco1OctaveValue] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 0).octave
        .value
  );
  const [vco1ShapeValue, setVco1ShapeValue] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 0).shape.value
  );
  const [vco1WaveType, setVco1WaveType] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 0).wave.value
  );
  const [vco2OctaveValue, setVco2OctaveValue] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 1).octave
        .value
  );
  const [vco2WaveType, setVco2WaveType] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 1).wave.value
  );
  const [vco2DutyValue, setVco2DutyValue] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 1).duty.value
  );
  const [vco2PitchValue, setVco2PitchValue] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 1).duty.value
  );
  const [vco2ShapeValue, setVco2ShapeValue] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 1).shape.value
  );
  const [vco1Level, setVco1Level] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 1).level.value
  );
  const [vco2Level, setVco2Level] = useState(
    () =>
      props.oscilators.find((params) => params.wave.oscilator === 1).level.value
  );
  const [cutoff, setCutoff] = useState(() => props.filter.cutoff.value);
  const [resonance, setResonance] = useState(
    () => props.filter.resonance.value
  );

  const [envType, setEnvType] = useState(() => props.envelope.type.value);
  const [envAttack, setEnvAttack] = useState(() => props.envelope.attack.value);
  const [envDecay, setEnvDecay] = useState(() => props.envelope.decay.value);
  const [envIntensity, setEnvIntensity] = useState(
    () => props.envelope.intensity.value
  );
  const [envTarget, setEnvTarget] = useState(() => props.envelope.target.value);

  const [lfoWave, setLfoWave] = useState(() => props.lfo.wave.value);
  const [lfoMode, setLfoMode] = useState(() => props.lfo.mode.value);
  const [lfoRate, setLfoRate] = useState(() => props.lfo.rate.value);
  const [lfoIntensity, setLfoIntensity] = useState(
    () => props.lfo.intensity.value
  );
  const [lfoTarget, setLfoTarget] = useState(() => props.lfo.target.value);

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
            <Master
              drive={drive}
              onChangeDrive={setDrive}
              octave={vco1OctaveValue}
              onChangeOctave={setVco1OctaveValue}
            />
            <VCO1
              shapeValue={vco1ShapeValue}
              waveType={vco1WaveType}
              onChangeWaveType={setVco1WaveType}
              onChangeShapeValue={setVco1ShapeValue}
            />
            <VCO2
              oscilator={props.oscilators.find(
                (params) => params.wave.oscilator === 1
              )}
              octave={vco2OctaveValue}
              onChangeOctave={setVco2OctaveValue}
              onChangeWaveType={setVco2WaveType}
              onChangeDutyValue={setVco2DutyValue}
              onChangePitchValue={setVco2PitchValue}
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
      <button onClick={() => selectPatch(injection)}>Injection</button>
      <button onClick={() => selectPatch(afxAcid)}>AfxAcid</button>
    </div>
  );
};

export default App;
