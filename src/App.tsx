import "./App.css";
import { useState } from "react";
import { Master } from "./panelSections/Master";
import { VCO1 } from "./panelSections/VCO1";
import { Mixer } from "./panelSections/Mixer";
import { Filter } from "./panelSections/Filter";
import { VCO2 } from "./panelSections/VCO2";
import { Envelope } from "./panelSections/Envelope";
import { LFO } from "./panelSections/LFO";
import { KorgProgramDump } from "./types";
import afxAcid from "./patches/<afx acid3>.json";
import injection from "./patches/Injection.json";
import fake3OSC from "./patches/Fake3OSC.json";
import TeeVeeSaw from "./patches/TeeVeeSaw.json";

const App = (props: KorgProgramDump) => {
  const selectPatch = (patch: KorgProgramDump) => {
    // MASTER
    setPatchName(patch.patchName);
    setVco1Octave(patch.oscilators[0].octave.value);
    setDrive(patch.drive.value);
    // VCO1
    setVco1Octave(patch.oscilators[0].octave.value);
    setVco1Wave(patch.oscilators[0].wave.value);
    setVco1Shape(patch.oscilators[0].shape.value);
    // VCO2
    setVco2Octave(patch.oscilators[1].octave.value);
    setVco2Wave(patch.oscilators[1].wave.value);
    setVco2Pitch(patch.oscilators[1].pitch.value);
    setVco2Duty(patch.oscilators[1].duty.value);
    setVco2Shape(patch.oscilators[1].shape.value);
    // MIX
    setVco1Level(patch.oscilators[0].level.value);
    setVco2Level(patch.oscilators[1].level.value);
    // FILTER
    setCutoff(patch.filter.cutoff.value);
    setResonance(patch.filter.resonance.value);
    // ENVELOPE
    setEnvType(patch.envelope.type.value);
    setEnvAttack(patch.envelope.attack.value);
    setEnvDecay(patch.envelope.decay.value);
    setEnvIntensity(patch.envelope.intensity.value);
    setEnvTarget(patch.envelope.target.value);
    // ENVELOPE
    setLfoWave(patch.lfo.wave.value);
    setLfoMode(patch.lfo.mode.value);
    setLfoRate(patch.lfo.rate.value);
    setLfoIntensity(patch.lfo.intensity.value);
    setLfoTarget(patch.lfo.target.value);
  };

  const [patchName, setPatchName] = useState(() => props.patchName);
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
              <span>{patchName}</span>
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
              octave={vco2Octave}
              pitch={vco2Pitch}
              wave={vco2Wave}
              duty={vco2Duty}
              shape={vco2Shape}
              onChangeOctave={setVco2Octave}
              onChangeWave={setVco2Wave}
              onChangeDuty={setVco2Duty}
              onChangePitch={setVco2Pitch}
              onChangeShape={setVco2Shape}
            />
            <Mixer
              vco1Level={vco1Level}
              vco2Level={vco2Level}
              onChangeVCO1LevelValue={setVco1Level}
              onChangeVCO2LevelValue={setVco2Level}
            />
            <Filter
              cutoff={cutoff}
              resonance={resonance}
              onChangeCutoff={setCutoff}
              onChangeResonance={setResonance}
            />
            <div className="panel-section" id="eglfo">
              <Envelope
                type={envType}
                attack={envAttack}
                decay={envDecay}
                intensity={envIntensity}
                target={envTarget}
                onChangeType={setEnvType}
                onChangeAttack={setEnvAttack}
                onChangeDecay={setEnvDecay}
                onChangeIntensity={setEnvIntensity}
                onChangeTarget={setEnvTarget}
              />
              <LFO
                wave={lfoWave}
                mode={lfoMode}
                rate={lfoRate}
                intensity={lfoIntensity}
                target={lfoTarget}
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
      <button onClick={() => selectPatch(fake3OSC)}>Fake30OSC</button>
      <button onClick={() => selectPatch(TeeVeeSaw)}>TeeVeeSaw</button>
    </div>
  );
};

export default App;
