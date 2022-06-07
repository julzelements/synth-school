import "./App.css";
import { useState, useEffect } from "react";
import { Master } from "./panelSections/Master";
import { VCO1 } from "./panelSections/VCO1";
import { Mixer } from "./panelSections/Mixer";
import { Filter } from "./panelSections/Filter";
import { VCO2 } from "./panelSections/VCO2";
import { Envelope } from "./panelSections/Envelope";
import { LFO } from "./panelSections/LFO";
import { AppProps, KorgProgramDump } from "./types";
import { Parameter, Parameters } from "./ParameterHash";

import afxAcid from "./patches/<afx acid3>.json";
import injection from "./patches/Injection.json";
import fake3OSC from "./patches/Fake3OSC.json";
import TeeVeeSaw from "./patches/TeeVeeSaw.json";
import fifthSaw from "./patches/dutch-bass/5th Saw.json";
import Delayed from "./patches/dutch-bass/Delayed.json";
import LeidenLoop from "./patches/dutch-bass/Leiden Loop.json";
import ShapeShifter from "./patches/dutch-bass/ShapeShifter.json";
import VintageKit from "./patches/dutch-bass/Vintage Kit.json";
import NinetiesClassic from "./patches/dutch-bass/90'S Classic.json";
import DeltaBass from "./patches/dutch-bass/Delta Bass.json";
import MiniBass from "./patches/dutch-bass/Mini Bass.json";
import SimpleBeat from "./patches/dutch-bass/Simple Beat.json";
import VinylPulse from "./patches/dutch-bass/Vinyl Pulse.json";
import AcidVox from "./patches/dutch-bass/Acid Vox.json";
import DutchClassic from "./patches/dutch-bass/DutchClassic.json";
import MotorMouth from "./patches/dutch-bass/Motor Mouth.json";
import SoulFood from "./patches/dutch-bass/Soul Food.json";
import VocalChordz from "./patches/dutch-bass/Vocal Chordz.json";
import AnalogDrums from "./patches/dutch-bass/Analog Drums.json";
import ElectroKit from "./patches/dutch-bass/Electro Kit.json";
import MrMatrix from "./patches/dutch-bass/Mr Matrix.json";
import SyntheBass from "./patches/dutch-bass/Synthe Bass.json";
import Boogie80s from "./patches/dutch-bass/Boogie 80's.json";
import FunkyAcid from "./patches/dutch-bass/Funky Acid.json";
import PortaBass from "./patches/dutch-bass/Porta Bass.json";
import TechNoir from "./patches/dutch-bass/Tech Noir.json";
import DanceBass from "./patches/dutch-bass/Dance Bass.json";
import GrittySquare from "./patches/dutch-bass/GrittySquare.json";
import PunkFunk from "./patches/dutch-bass/Punk Funk.json";
import VCTenVox from "./patches/dutch-bass/VC-10 Vox.json";
import DeepHouse from "./patches/dutch-bass/Deep House.json";
import KeycityBass from "./patches/dutch-bass/Keycity Bass.json";
import RawBass from "./patches/dutch-bass/Raw Bass.json";
import VideoGame from "./patches/dutch-bass/Video Game.json";


import { initialiseParamState, ParamState, ParameterStateMap } from "./paramState";
import MonologueController from "./midi/midi";

const getMergedParamState = (state: ParamState, setParamState, monologueController: MonologueController) =>
  (parameter: Parameter, finalValue: number) => {
  const paramStateMap: ParameterStateMap = {
    parameter: parameter,
    value: finalValue,
  };

  setParamState({
    ...state,
    [parameter.name]: paramStateMap,
  });
}

const getMergedParamStateForCallback = (state: ParamState, setParamState, monologueController: MonologueController) =>
  (parameter: Parameter) =>
  (finalValue: number) => {
  monologueController.setParameter(parameter, finalValue);

  const paramStateMap: ParameterStateMap = {
    parameter: parameter,
    value: finalValue,
  };

  setParamState({
    ...state,
    [parameter.name]: paramStateMap,
  })
};

const flushStateToMonologue = (state: ParamState, monologueController: MonologueController) => {
  Object.keys(state).forEach(key => {
    const { parameter, value } = state[key];
    console.log(`Setting ${parameter.name} to ${value}`);
    monologueController.setParameter(parameter, value);
  })
}

const App = (props: AppProps) => {
  const {
    korgProgramDump,
    monologueController,
  } = props;

  const selectPatch = (patch: KorgProgramDump) => {
    const state = initialiseParamState(patch);

    setPatchName(patch.patchName);
    setParamState(state);
    flushStateToMonologue(state, monologueController);
  };

  const connectMidi = async () => {
    return monologueController.connect(false);
  };

  const [patchName, setPatchName] = useState(() => korgProgramDump.patchName);
  const [paramState, setParamState] = useState(() => initialiseParamState(korgProgramDump));

  const appliedParamState = getMergedParamState(paramState, setParamState, monologueController);
  const setParamViaCallback = getMergedParamStateForCallback(paramState, setParamState, monologueController);

  monologueController.onParameterChange(Parameters.DRIVE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO1_WAVE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO1_SHAPE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO1_LEVEL, appliedParamState);

  monologueController.onParameterChange(Parameters.VCO2_WAVE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO2_SHAPE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO2_PITCH, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO2_OCTAVE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO2_LEVEL, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO2_DUTY, appliedParamState);

  monologueController.onParameterChange(Parameters.LFO_TARGET, appliedParamState);
  monologueController.onParameterChange(Parameters.LFO_WAVE, appliedParamState);
  monologueController.onParameterChange(Parameters.LFO_MODE, appliedParamState);
  monologueController.onParameterChange(Parameters.LFO_RATE, appliedParamState);
  monologueController.onParameterChange(Parameters.LFO_INTENSITY, appliedParamState);

  monologueController.onParameterChange(Parameters.ENV_TYPE, appliedParamState);
  monologueController.onParameterChange(Parameters.ENV_TARGET, appliedParamState);
  monologueController.onParameterChange(Parameters.ENV_ATTACK, appliedParamState);
  monologueController.onParameterChange(Parameters.ENV_DECAY, appliedParamState);
  monologueController.onParameterChange(Parameters.ENV_INTENSITY, appliedParamState);

  monologueController.onParameterChange(Parameters.CUTOFF, appliedParamState);
  monologueController.onParameterChange(Parameters.RESONANCE, appliedParamState);

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
              drive={paramState.drive.value}
              onChangeDrive={setParamViaCallback(Parameters.DRIVE)}
            />
            <VCO1
              shape={paramState.vco1Shape.value}
              wave={paramState.vco1Wave.value}

              onChangeWave={setParamViaCallback(Parameters.VCO1_WAVE)}
              onChangeShape={setParamViaCallback(Parameters.VCO1_SHAPE)}
            />
            <VCO2
              octave={paramState.vco2Octave.value}
              pitch={paramState.vco2Pitch.value}
              wave={paramState.vco2Wave.value}
              duty={paramState.vco2Duty.value}
              shape={paramState.vco2Shape.value}

              onChangeOctave={setParamViaCallback(Parameters.VCO2_OCTAVE)}
              onChangeWave={setParamViaCallback(Parameters.VCO2_WAVE)}
              onChangeDuty={setParamViaCallback(Parameters.VCO2_DUTY)}
              onChangePitch={setParamViaCallback(Parameters.VCO2_PITCH)}
              onChangeShape={setParamViaCallback(Parameters.VCO2_SHAPE)}
            />
            <Mixer
              vco1Level={paramState.vco1Level.value}
              vco2Level={paramState.vco2Level.value}

              onChangeVCO1LevelValue={setParamViaCallback(Parameters.VCO1_LEVEL)}
              onChangeVCO2LevelValue={setParamViaCallback(Parameters.VCO2_LEVEL)}
            />
            <Filter
              cutoff={paramState.cutoff.value}
              resonance={paramState.resonance.value}
              onChangeCutoff={setParamViaCallback(Parameters.CUTOFF)}
              onChangeResonance={setParamViaCallback(Parameters.RESONANCE)}
            />
            <div className="panel-section" id="eglfo">
              <Envelope
                type={paramState.envType.value}
                attack={paramState.envAttack.value}
                decay={paramState.envDecay.value}
                intensity={paramState.envIntensity.value}
                target={paramState.envTarget.value}

                onChangeType={setParamViaCallback(Parameters.ENV_TYPE)}
                onChangeAttack={setParamViaCallback(Parameters.ENV_ATTACK)}
                onChangeDecay={setParamViaCallback(Parameters.ENV_DECAY)}
                onChangeIntensity={setParamViaCallback(Parameters.ENV_INTENSITY)}
                onChangeTarget={setParamViaCallback(Parameters.ENV_TARGET)}
              />
              <LFO
                wave={paramState.lfoWave.value}
                mode={paramState.lfoMode.value}
                rate={paramState.lfoRate.value}
                intensity={paramState.lfoIntensity.value}
                target={paramState.lfoTarget.value}

                onChangeWave={setParamViaCallback(Parameters.LFO_WAVE)}
                onChangeMode={setParamViaCallback(Parameters.LFO_MODE)}
                onChangeRate={setParamViaCallback(Parameters.LFO_RATE)}
                onChangeIntensity={setParamViaCallback(Parameters.LFO_INTENSITY)}
                onChangeTarget={setParamViaCallback(Parameters.LFO_TARGET)}
              />
            </div>
          </div>
        </div>
      </div>
      fifthSaw
      <button onClick={() => selectPatch(Delayed)}>Delayed</button>
      <button onClick={() => selectPatch(LeidenLoop)}>LeidenLoop</button>
      <button onClick={() => selectPatch(ShapeShifter)}>ShapeShifter</button>
      <button onClick={() => selectPatch(VintageKit)}>VintageKit</button>
      <button onClick={() => selectPatch(NinetiesClassic)}>NinetiesClassic</button>
      <button onClick={() => selectPatch(DeltaBass)}>DeltaBass</button>
      <button onClick={() => selectPatch(MiniBass)}>MiniBass</button>
      <button onClick={() => selectPatch(SimpleBeat)}>SimpleBeat</button>
      <button onClick={() => selectPatch(VinylPulse)}>VinylPulse</button>
      <button onClick={() => selectPatch(AcidVox)}>AcidVox</button>
      <button onClick={() => selectPatch(DutchClassic)}>DutchClassic</button>
      <button onClick={() => selectPatch(MotorMouth)}>MotorMouth</button>
      <button onClick={() => selectPatch(SoulFood)}>SoulFood</button>
      <button onClick={() => selectPatch(VocalChordz)}>VocalChordz</button>
      <button onClick={() => selectPatch(AnalogDrums)}>AnalogDrums</button>
      <button onClick={() => selectPatch(ElectroKit)}>ElectroKit</button>
      <button onClick={() => selectPatch(MrMatrix)}>MrMatrix</button>
      <button onClick={() => selectPatch(SyntheBass)}>SyntheBass</button>
      <button onClick={() => selectPatch(Boogie80s)}>Boogie80s</button>
      <button onClick={() => selectPatch(FunkyAcid)}>FunkyAcid</button>
      <button onClick={() => selectPatch(PortaBass)}>PortaBass</button>
      <button onClick={() => selectPatch(TechNoir)}>TechNoir</button>
      <button onClick={() => selectPatch(DanceBass)}>DanceBass</button>
      <button onClick={() => selectPatch(GrittySquare)}>GrittySquare</button>
      <button onClick={() => selectPatch(PunkFunk)}>PunkFunk</button>
      <button onClick={() => selectPatch(VCTenVox)}>VCTenVox</button>
      <button onClick={() => selectPatch(DeepHouse)}>DeepHouse</button>
      <button onClick={() => selectPatch(KeycityBass)}>KeycityBass</button>
      <button onClick={() => selectPatch(RawBass)}>RawBass</button>
      <button onClick={() => selectPatch(VideoGame)}>VideoGame</button>
      <button onClick={() => selectPatch(injection)}>injection</button>
      <button onClick={() => selectPatch(afxAcid)}>afxAcid</button>
      <button onClick={() => selectPatch(fake3OSC)}>fake3OSC</button>
      <button onClick={() => selectPatch(TeeVeeSaw)}>TeeVeeSaw</button>
      <button onClick={() => connectMidi()}>ConnectMidi</button>
    </div>
  );
};

export default App;
