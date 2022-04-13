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
    setVco1Octave(patch.oscilators[0].octave.value);
    setVco2Octave(patch.oscilators[1].octave.value);
    setDrive(patch.drive.value);
    setVco1Shape(patch.oscilators[0].shape.value);
    setVco1Wave(patch.oscilators[0].wave.value);
  };

  const [drive, setDrive] = useState(() => props.drive.value);
  const [vco1Octave, setVco1Octave] = useState(
    () => props.oscilators[0].octave.value
  );
  const [vco1Shape, setVco1Shape] = useState(
    () => props.oscilators[0].shape.value
  );
  const [vco1Wave, setVco1Wave] = useState(
    () => props.oscilators[0].wave.value
  );
  const [vco2Octave, setVco2Octave] = useState(
    () => props.oscilators[1].octave.value
  );
  const [vco2Wave, setVco2Wave] = useState(
    () => props.oscilators[1].wave.value
  );
  const [vco2Duty, setVco2Duty] = useState(
    () => props.oscilators[1].duty.value
  );
  const [vco2Pitch, setVco2Pitch] = useState(
    () => props.oscilators[1].duty.value
  );
  const [vco2Shape, setVco2Shape] = useState(
    () => props.oscilators[1].shape.value
  );
  const [vco1Level, setVco1Level] = useState(
    () => props.oscilators[1].level.value
  );
  const [vco2Level, setVco2Level] = useState(
    () => props.oscilators[1].level.value
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
              octave={vco1Octave}
              onChangeOctave={setVco1Octave}
            />
            <VCO1
              shape={vco1Shape}
              wave={vco1Wave}
              onChangeWave={setVco1Wave}
              onChangeShape={setVco1Shape}
            />
            <VCO2
              oscilator={props.oscilators.find(
                (params) => params.wave.oscilator === 1
              )}
              octave={vco2Octave}
              onChangeOctave={setVco2Octave}
              onChangeWave={setVco2Wave}
              onChangeDuty={setVco2Duty}
              onChangePitch={setVco2Pitch}
              onChangeShape={setVco2Shape}
            />
            <Mixer
              vco1Level={props.oscilators[0].level}
              vco2Level={props.oscilators[1].level}
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
