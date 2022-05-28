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
import { initialiseParamState, ParamState, ParameterStateMap } from "./paramState";
import MonologueController from "./midi/midi";

const getMergedParamState = (state:ParamState, setParamState, monologueController:MonologueController) => (parameter: Parameter, finalValue: number) => {
  const paramStateMap:ParameterStateMap = {
    parameter: parameter,
    value: finalValue,
  };

  setParamState({
    ...state,
    [parameter.name]: paramStateMap,
  });
}

const getMergedParamStateForCallback = (state:ParamState, setParamState, monologueController:MonologueController) => (parameter: Parameter) => (finalValue: number) => {
  monologueController.setParameter(parameter, finalValue);

  const paramStateMap:ParameterStateMap = {
    parameter: parameter,
    value: finalValue,
  };

  setParamState({
    ...state,
    [parameter.name]: paramStateMap,
  })
};

const flushStateToMonologue = (state:ParamState, monologueController:MonologueController) => {
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
    setPatchName(patch.patchName);

    const state = initialiseParamState(patch);

    setParamState(state);
    flushStateToMonologue(state, monologueController);
  };

  const connectMidi = async () => {
    return monologueController.connect();
  };

  const [patchName, setPatchName] = useState(() => korgProgramDump.patchName);
  const [paramState, setParamState] = useState(() => initialiseParamState(korgProgramDump));

  useEffect(() => {
    flushStateToMonologue(paramState, monologueController);
  },[paramState, monologueController]);

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
      <button onClick={() => selectPatch(injection)}>Injection</button>
      <button onClick={() => selectPatch(afxAcid)}>AfxAcid</button>
      <button onClick={() => selectPatch(fake3OSC)}>Fake30OSC</button>
      <button onClick={() => selectPatch(TeeVeeSaw)}>TeeVeeSaw</button>
      <button onClick={() => connectMidi()}>ConnectMidi</button>
    </div>
  );
};

export default App;
