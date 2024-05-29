import "./App.css";
import { useState } from "react";
import { AppProps, KorgProgramDump } from "./types";
import { Parameter, Parameters } from "./ParameterHash";

import { initialiseParamState, ParamState, ParameterStateMap } from "./paramState";
import MonologueController from "./midi/midi";
import Buttons from "./Components/Buttons";
import Panel from "./Components/Panel";
import Recorder from "./Components/Recorder";
import { cleanName } from "./utils/utils";
import LoadPatches from "./Components/LoadPatches";
import MiscParams from "./Components/MiscParams";

const getMergedParamState =
  (state: ParamState, setParamState, monologueController: MonologueController) =>
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
  (state: ParamState, setParamState, monologueController: MonologueController) =>
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
  console.log(state);
  Object.keys(state).forEach((key) => {
    const { parameter, value } = state[key];
    console.log(`Setting ${parameter.name} to ${value}`);
    monologueController.setParameter(parameter, value);
  });
};

const App = (props: AppProps) => {
  const [opened, setOpened] = useState(false);

  const { korgProgramDump, monologueController } = props;

  const selectPatch = (patch: KorgProgramDump) => {
    setPatchName(cleanName(patch.patchName));
    setMiscParams(patch.misc);

    const state = initialiseParamState(patch);

    setParamState(state);
    flushStateToMonologue(state, monologueController);
    setOpened(false);
  };

  const connectMidi = async () => {
    return monologueController.connect(false);
  };

  const [patchName, setPatchName] = useState(() => cleanName(korgProgramDump.patchName));
  const [miscParams, setMiscParams] = useState(() => korgProgramDump.misc);
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
          <Panel setParamViaCallback={setParamViaCallback} paramState={paramState} Parameters={Parameters} />
        </div>
        <Buttons selectPatch={selectPatch} connectMidi={connectMidi} setOpened={setOpened} opened={opened} />
        <MiscParams miscParams={miscParams} />
        {/* <Recorder patchName={patchName} /> */}
        {/* <LoadPatches patchName={patchName} /> */}
      </div>
    </div>
  );
};
export default App;
