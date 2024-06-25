// There are three types of units dealt with in this app

import { Parameter, ParameterType } from "../ParameterHash";

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
type SysexRange = number & { readonly _sysexRange: unique symbol };

const isMidiRange = (value: number): value is MidiRange => {
  return value >= 0 && value <= midiRangeMax;
};

const isSysexRange = (value: number): value is SysexRange => {
  return value >= 0 && value <= sysexRangeMax;
};

export const convertToSysexRange = (value: number, parameter: Parameter): SysexRange => {
  if (!isMidiRange(value)) {
    throw new Error("Value must be in the range 0-127");
  }
  let result: number;
  switch (parameter.type) {
    case ParameterType.LINEAR:
      result = Math.round((value / midiRangeMax) * sysexRangeMax) as SysexRange;
      break;
    default:
      result = value;
  }
  if (!isSysexRange(result)) {
    throw new Error(`Converted value is out of Sysex range: ${result}`);
  }
  return result;
};

export const convertToMidiRange = (value: number, parameter: Parameter): MidiRange => {
  if (!isSysexRange(value)) {
    throw new Error("Value must be in the range 0-1023");
  }
  let result: number;
  switch (parameter.type) {
    case ParameterType.LINEAR:
      result = Math.round((value / sysexRangeMax) * midiRangeMax) as MidiRange;
      break;
    default:
      result = value;
  }
  if (!isMidiRange(result)) {
    throw new Error(`Converted value is out of Midi range: ${result}`);
  }
  return result;
};
