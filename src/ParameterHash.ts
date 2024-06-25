export interface Parameter {
  name: string;
  ID: number;
  type: ParameterType;
  isMisc?: boolean;
}

export enum ParameterType {
  LINEAR,
  THREE_POLE,
  FOUR_POLE,
  FIVE_POLE,
  LINEAR_INVERTED,
}

export enum ParameterHash {
  DRIVE = 28,
  VCO1_WAVE = 50,
  VCO2_WAVE = 51,
  VCO1_SHAPE = 36,
  VCO1_OCTAVE = 999, // This is a sysex only parameter that is stored in the patch
  VCO2_SHAPE = 37,
  VCO2_PITCH = 35,
  VCO2_OCTAVE = 49,
  VCO1_LEVEL = 39,
  VCO2_LEVEL = 40,
  LFO_TARGET = 56,
  LFO_WAVE = 58,
  LFO_MODE = 59,
  LFO_RATE = 24,
  LFO_INTENSITY = 26,
  ENV_TYPE = 61,
  ENV_TARGET = 62,
  ENV_ATTACK = 16,
  ENV_DECAY = 17,
  ENV_INTENSITY = 25,
  CUTOFF = 43,
  RESONANCE = 44,
  VCO2_DUTY = 60,
}

export const Parameters = {
  DRIVE: {
    name: "drive",
    ID: ParameterHash.DRIVE,
    type: ParameterType.LINEAR,
  },
  VCO1_WAVE: {
    name: "vco1Wave",
    ID: ParameterHash.VCO1_WAVE,
    type: ParameterType.THREE_POLE,
  },
  VCO2_WAVE: {
    name: "vco2Wave",
    ID: ParameterHash.VCO2_WAVE,
    type: ParameterType.THREE_POLE,
  },
  VCO2_DUTY: {
    name: "vco2Duty",
    ID: ParameterHash.VCO2_DUTY,
    type: ParameterType.THREE_POLE,
  },
  VCO1_SHAPE: {
    name: "vco1Shape",
    ID: ParameterHash.VCO1_SHAPE,
    type: ParameterType.LINEAR,
  },
  VCO2_SHAPE: {
    name: "vco2Shape",
    ID: ParameterHash.VCO2_SHAPE,
    type: ParameterType.LINEAR,
  },
  VCO2_PITCH: {
    name: "vco2Pitch",
    ID: ParameterHash.VCO2_PITCH,
    type: ParameterType.LINEAR,
  },
  VCO1_OCTAVE: {
    name: "vco1Octave",
    ID: ParameterHash.VCO1_OCTAVE,
    type: ParameterType.FIVE_POLE,
    isMisc: true,
  },
  VCO2_OCTAVE: {
    name: "vco2Octave",
    ID: ParameterHash.VCO2_OCTAVE,
    type: ParameterType.FOUR_POLE,
  },
  VCO1_LEVEL: {
    name: "vco1Level",
    ID: ParameterHash.VCO1_LEVEL,
    type: ParameterType.LINEAR,
  },
  VCO2_LEVEL: {
    name: "vco2Level",
    ID: ParameterHash.VCO2_LEVEL,
    type: ParameterType.LINEAR,
  },
  LFO_TARGET: {
    name: "lfoTarget",
    ID: ParameterHash.LFO_TARGET,
    type: ParameterType.THREE_POLE,
  },
  LFO_WAVE: {
    name: "lfoWave",
    ID: ParameterHash.LFO_WAVE,
    type: ParameterType.THREE_POLE,
  },
  LFO_MODE: {
    name: "lfoMode",
    ID: ParameterHash.LFO_MODE,
    type: ParameterType.THREE_POLE,
  },
  LFO_RATE: {
    name: "lfoRate",
    ID: ParameterHash.LFO_RATE,
    type: ParameterType.LINEAR,
  },
  LFO_INTENSITY: {
    name: "lfoIntensity",
    ID: ParameterHash.LFO_INTENSITY,
    type: ParameterType.LINEAR_INVERTED,
  },
  ENV_TYPE: {
    name: "envType",
    ID: ParameterHash.ENV_TYPE,
    type: ParameterType.THREE_POLE,
  },
  ENV_TARGET: {
    name: "envTarget",
    ID: ParameterHash.ENV_TARGET,
    type: ParameterType.THREE_POLE,
  },
  ENV_ATTACK: {
    name: "envAttack",
    ID: ParameterHash.ENV_ATTACK,
    type: ParameterType.LINEAR,
  },
  ENV_DECAY: {
    name: "envDecay",
    ID: ParameterHash.ENV_DECAY,
    type: ParameterType.LINEAR,
  },
  ENV_INTENSITY: {
    name: "envIntensity",
    ID: ParameterHash.ENV_INTENSITY,
    type: ParameterType.LINEAR_INVERTED,
  },
  CUTOFF: {
    name: "cutoff",
    ID: ParameterHash.CUTOFF,
    type: ParameterType.LINEAR,
  },
  RESONANCE: {
    name: "resonance",
    ID: ParameterHash.RESONANCE,
    type: ParameterType.LINEAR,
  },
};
