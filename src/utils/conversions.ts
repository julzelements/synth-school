// There are three types of units dealt with in this app

import { Parameter, ParameterType } from "@/types/ParameterHash";
import { rangeMap } from "@/utils/utils";

// MIDI
// sent in realtime, from or to the monologue
// range 0-127

// Sysex
// The actual state that lives on the monologue
// sent in patch dumps
// This is the unit that is used in the app state
// range 0-1023

// Some sysex state will only have 0, 1, 2 (switches)
// some will be linear across the whole range

// UI
// This is handled by each ui element
// in the case of pots, it will be a range of degrees
// with switches it will be a state like 0, 1, 2

export const midiRangeMax = 127;
export const sysexRangeMax = 1023;

type MidiRange = number & { readonly _midiRange: unique symbol };

const isMidiRange = (value: number): value is MidiRange => {
  return value >= 0 && value <= midiRangeMax;
};

const isSysexRange = (value: number): value is MidiRange => {
  return value >= -511 && value <= 1023;
};

const convertToInvertedSysexRange = (midiValue: number) => {
  if (midiValue >= 64) {
    return Math.round((511 / 63) * (midiValue - 64));
  } else {
    // is inverted range
    return Math.round((-170 / 21) * midiValue - 1);
  }
};

const convertToInvertedMidiRange = (sysexValue: number) => {
  if (sysexValue >= 0) {
    return Math.round((63 / 511) * sysexValue + 64);
  } else {
    // is inverted range
    return Math.round((-21 / 170) * sysexValue);
  }
};

export const convertToSysexRange = (value: number, parameter: Parameter) => {
  if (!isMidiRange(value)) {
    throw new Error("Midi value must be in the range 0-127");
  }
  let result: number;
  switch (parameter.type) {
    case ParameterType.LINEAR:
      result = Math.round((value / midiRangeMax) * sysexRangeMax);
      break;
    case ParameterType.LINEAR_INVERTED:
      result = convertToInvertedSysexRange(value);
      break;
    default:
      result = value;
  }
  if (result > 1023 || result < -511) {
    throw new Error(`Converted value is out of Sysex range: ${result}`);
  }
  return result;
};

export const convertToMidiRange = (sysexValue: number, parameter: Parameter) => {
  if (!isSysexRange(sysexValue)) {
    throw new Error("Sysex value must be in the range -511 to 1023");
  }
  let result: number;
  switch (parameter.type) {
    case ParameterType.LINEAR:
      result = Math.round((sysexValue / sysexRangeMax) * midiRangeMax) as MidiRange;
      break;
    case ParameterType.LINEAR_INVERTED:
      result = convertToInvertedMidiRange(sysexValue);
      break;
    default:
      result = sysexValue;
  }
  if (!isMidiRange(result)) {
    throw new Error(`Converted value is out of Midi range: ${result}`);
  }
  return result;
};

export const convertInvertibleSysexToDegrees = (sysexValue: number, startAngle: number, endAngle: number) => {
  return sysexValue >= 0
    ? rangeMap(0, 511, startAngle, endAngle, sysexValue)
    : rangeMap(-511, -1, startAngle, endAngle, sysexValue);
};

export const convertDegreesToInvertibleSysex = (sysexValue: number, startAngle: number, endAngle: number) => {
  return sysexValue >= 0
    ? rangeMap(0, 511, startAngle, endAngle, sysexValue)
    : rangeMap(-511, -1, startAngle, endAngle, sysexValue);
};
