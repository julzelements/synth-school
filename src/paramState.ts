// import { constants } from "buffer";
import { Parameters, Parameter } from "./ParameterHash";
import { KorgProgramDump } from "./types";

export interface ParameterStateMap {
  parameter: Parameter;
  value: number;
}

export interface ParamState {
  drive: ParameterStateMap;
  vco1Shape: ParameterStateMap;
  vco1Wave: ParameterStateMap;
  vco2Octave: ParameterStateMap;
  vco1Octave: ParameterStateMap;
  vco2Wave: ParameterStateMap;
  vco2Duty: ParameterStateMap;
  vco2Pitch: ParameterStateMap;
  vco2Shape: ParameterStateMap;
  vco1Level: ParameterStateMap;
  vco2Level: ParameterStateMap;
  cutoff: ParameterStateMap;
  resonance: ParameterStateMap;
  envType: ParameterStateMap;
  envAttack: ParameterStateMap;
  envDecay: ParameterStateMap;
  envIntensity: ParameterStateMap;
  envTarget: ParameterStateMap;
  lfoWave: ParameterStateMap;
  lfoMode: ParameterStateMap;
  lfoRate: ParameterStateMap;
  lfoIntensity: ParameterStateMap;
  lfoTarget: ParameterStateMap;
}

export const initialiseParamState = (korgProgramDump: KorgProgramDump): ParamState => {
  console.log("initialiseParamState");
  return {
    drive: {
      parameter: Parameters.DRIVE,
      value: korgProgramDump.drive.value,
    },
    vco1Octave: {
      parameter: Parameters.VCO1_SHAPE,
      value: korgProgramDump.oscillators[0].octave.value,
    },
    vco1Shape: {
      parameter: Parameters.VCO1_SHAPE,
      value: korgProgramDump.oscillators[0].shape.value,
    },
    vco1Wave: {
      parameter: Parameters.VCO1_WAVE,
      value: korgProgramDump.oscillators[0].wave.value,
    },
    vco2Octave: {
      parameter: Parameters.VCO2_OCTAVE,
      value: korgProgramDump.oscillators[1].octave.value,
    },
    vco2Wave: {
      parameter: Parameters.VCO2_WAVE,
      value: korgProgramDump.oscillators[1].wave.value,
    },
    vco2Duty: {
      parameter: Parameters.VCO2_DUTY,
      value: korgProgramDump.oscillators[1].duty.value,
    },
    vco2Pitch: {
      parameter: Parameters.VCO2_PITCH,
      value: korgProgramDump.oscillators[1].pitch.value,
    },
    vco2Shape: {
      parameter: Parameters.VCO2_SHAPE,
      value: korgProgramDump.oscillators[1].shape.value,
    },
    vco1Level: {
      parameter: Parameters.VCO2_LEVEL,
      value: korgProgramDump.oscillators[1].level.value,
    },
    vco2Level: {
      parameter: Parameters.VCO2_LEVEL,
      value: korgProgramDump.oscillators[1].level.value,
    },
    cutoff: {
      parameter: Parameters.CUTOFF,
      value: korgProgramDump.filter.cutoff.value,
    },
    resonance: {
      parameter: Parameters.RESONANCE,
      value: korgProgramDump.filter.resonance.value,
    },
    envType: {
      parameter: Parameters.ENV_TYPE,
      value: korgProgramDump.envelope.type.value,
    },
    envAttack: {
      parameter: Parameters.ENV_ATTACK,
      value: korgProgramDump.envelope.attack.value,
    },
    envDecay: {
      parameter: Parameters.ENV_DECAY,
      value: korgProgramDump.envelope.decay.value,
    },
    envIntensity: {
      parameter: Parameters.ENV_INTENSITY,
      value: korgProgramDump.envelope.intensity.value,
    },
    envTarget: {
      parameter: Parameters.ENV_TARGET,
      value: korgProgramDump.envelope.target.value,
    },
    lfoWave: {
      parameter: Parameters.LFO_WAVE,
      value: korgProgramDump.lfo.wave.value,
    },
    lfoMode: {
      parameter: Parameters.LFO_MODE,
      value: korgProgramDump.lfo.mode.value,
    },
    lfoRate: {
      parameter: Parameters.LFO_RATE,
      value: korgProgramDump.lfo.rate.value,
    },
    lfoIntensity: {
      parameter: Parameters.LFO_INTENSITY,
      value: korgProgramDump.lfo.intensity.value,
    },
    lfoTarget: {
      parameter: Parameters.ENV_TARGET,
      value: korgProgramDump.lfo.target.value,
    },
  };
};
