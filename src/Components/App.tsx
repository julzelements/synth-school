import { Dispatch, SetStateAction, useState } from "react";
import { AppProps, KorgProgramDump } from "../types/types";
import { Parameter, Parameters } from "../types/ParameterHash";

import { initialiseParamState, ParamState, ParameterStateMap } from "../types/paramState";
import MonologueController from "../utils/midi";
import Panel from "./Panel";
import { cleanName } from "../utils/utils";
import MiscParams from "./MiscParams";

import fake30SC from "../../public/patches/Fake3OSC.json";
import afxAcid from "../../public/patches/afx acid3.json";
import injection from "../../public/patches/Injection.json";

const getMergedParamState =
  (state: ParamState, setParamState: Dispatch<SetStateAction<ParamState>>) =>
  (parameter: Parameter, finalValue: number) => {
    const paramStateMap: ParameterStateMap = {
      parameter: parameter,
      value: finalValue,
    };

    setParamState({
      ...state,
      [parameter.name]: paramStateMap,
    });
  };

const getMergedParamStateForCallback =
  (state: ParamState, setParamState: Dispatch<SetStateAction<ParamState>>, monologueController: MonologueController) =>
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
    });
  };

const flushStateToMonologue = (state: ParamState, monologueController: MonologueController) => {
  console.log("🎹", state);
  Object.keys(state).forEach((key) => {
    const { parameter, value } = state[key as keyof ParamState];
    console.log(`Setting ${parameter.name} to ${value}`);
    monologueController.setParameter(parameter, value);
  });
};

const App = (props: AppProps) => {
  const { korgProgramDump, monologueController } = props;

  const selectPatch = (patch: KorgProgramDump) => {
    setPatchName(cleanName(patch.patchName));
    setMiscParams(patch.misc);

    const state = initialiseParamState(patch);
    setParamState(state);
    flushStateToMonologue(state, monologueController);
  };

  const connectMidi = async () => {
    return monologueController.connect(false);
  };

  const [patchName, setPatchName] = useState(() => cleanName(korgProgramDump.patchName));
  const [miscParams, setMiscParams] = useState(() => korgProgramDump.misc);
  const [paramState, setParamState] = useState(() => initialiseParamState(korgProgramDump));

  const appliedParamState = getMergedParamState(paramState, setParamState);
  const setParamViaCallback = getMergedParamStateForCallback(paramState, setParamState, monologueController);

  monologueController.onParameterChange(Parameters.DRIVE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO1_WAVE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO1_SHAPE, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO1_LEVEL, appliedParamState);
  monologueController.onParameterChange(Parameters.VCO1_OCTAVE, appliedParamState);

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
          <Panel setParamViaCallback={setParamViaCallback} paramState={paramState} Parameters={Parameters} />
        </div>
        <MiscParams miscParams={miscParams} />
        <button className="menu-button" onClick={() => connectMidi()} color="dark">
          🎹 Connect Midi
        </button>
        <button className="menu-button" onClick={() => selectPatch(afxAcid)}>
          afxAcid
        </button>
        <button className="menu-button" onClick={() => selectPatch(injection)}>
          injection
        </button>
        <button className="menu-button" onClick={() => selectPatch(fake30SC)}>
          fake30SC
        </button>
      </div>
    </div>
  );
};
export default App;
