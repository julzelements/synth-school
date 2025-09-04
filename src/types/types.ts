import MonologueController from "@/utils/midi";

export interface AppProps {
  korgProgramDump: KorgProgramDump;
  monologueController: MonologueController;
}

export interface KorgProgramDump {
  patchName: string;
  drive: Parameter;
  oscillators: Oscilator[];
  filter: Filter;
  envelope: Envelope;
  lfo: Lfo;
  misc: Misc;
  sequencer: Sequencer;
}
export interface Parameter {
  name: string;
  value: number;
}
export interface Oscilator {
  wave: Wave;
  shape: Parameter;
  level: Parameter;
  pitch: Parameter;
  duty: Parameter;
  octave: Parameter;
}
export interface Wave {
  name: string;
  value: number;
  oscilator: number;
}
export interface Filter {
  cutoff: Parameter;
  resonance: Parameter;
}
export interface Envelope {
  type: Parameter;
  attack: Parameter;
  decay: Parameter;
  intensity: Parameter;
  target: Target;
}
export interface Target {
  name: string;
  value: number;
  type: number; // Either ENV or LFO (redundant data)
}
export interface Lfo {
  wave: Wave;
  mode: Parameter;
  rate: Parameter;
  intensity: Parameter;
  target: Target;
}
export interface Misc {
  bpmSync: Parameter;
  portamentMode: Parameter;
  portamentTime: Parameter;
  cutoffVelocity: Parameter;
  cutoffKeyTrack: Parameter;
  sliderAssign: {
    name: string;
    value: string;
  };
}
export interface SliderAssignOrParameter {
  name: string;
  value: string;
}
export interface Sequencer {
  bpm: Parameter;
  stepLength: Parameter;
  stepResolution: Parameter;
  swing: Parameter;
  defaultGateTime: Parameter;
  motionSlotParams?: MotionSlotParamsEntity[] | null;
  steps?: StepsEntity[] | null;
}
export interface MotionSlotParamsEntity {
  slotNumber: number;
  active: Parameter;
  smooth: Parameter;
  parameter: {
    name: string;
    value: string;
  };
}
export interface StepsEntity {
  stepNumber: number;
  active: Parameter;
  motionActive: Parameter;
  slideActive: Parameter;
  event: Event;
}
export interface Event {
  note: Note;
  motionSlotsData?: (Parameter[] | null)[] | null;
}
export interface Note {
  key: Parameter;
  velocity: Parameter;
  gateTime: Parameter;
  trigger: Parameter;
}
