import { WebMidi } from "webmidi";

import { convertToMidiRange, convertToSysexRange } from "./conversions";
import { Parameter } from "types/ParameterHash";

const PARAM_CHANGE_MESSAGE = 176;

type ParameterChangeCallback = (parameter: Parameter, finalValue: number) => void;

interface RegisteredParameter {
  parameter: Parameter;
  callback: ParameterChangeCallback;
}
export default class MonologueController {
  constructor() {
    console.log("monologue controller is initialised");
  }

  demoMode = false;

  registeredParameters: Record<string, RegisteredParameter> = {};
  onParameterChange = (parameter: Parameter, callback: ParameterChangeCallback) => {
    this.registeredParameters[parameter.ID] = {
      parameter,
      callback,
    };
  };

  handleParameterChange = (e: { data: Uint8Array<ArrayBufferLike> }) => {
    if (this.demoMode) {
      return;
    }

    Object.keys(this.registeredParameters).map((id) => {
      const { parameter, callback } = this.registeredParameters[id];
      const [message, messageParameter, midiValue] = e.data;
      // We only want to listen to param change messages
      if (message !== PARAM_CHANGE_MESSAGE) return null;
      if (messageParameter !== parameter.ID) {
        return null;
      }
      const sysexValue = convertToSysexRange(midiValue, parameter);
      return callback(parameter, sysexValue);
    });
  };

  setParameter = (parameter: Parameter, sysexValue: number) => {
    const channelOut = Array.from(WebMidi.outputs.values()).find((input) => input.name === "monologue SOUND");
    if (this.demoMode || parameter.isMisc || !channelOut) {
      return;
    }
    const midiValue = convertToMidiRange(sysexValue, parameter);
    console.log(`setting parameter ${parameter.name}:${parameter.ID} to ${midiValue}, sending to ${channelOut.name}`);
    channelOut.sendControlChange(parameter.ID, midiValue);
  };

  connectDemo = async () => {
    this.demoMode = true;
    console.log("demo mode");
  };

  connect = async (allowDemoFallback: boolean) => {
    if (!navigator.requestMIDIAccess) {
      console.log("Midi is not supported in this browser");
      this.connectDemo();
      return;
    }
    console.log("connecting to monologue");
    await WebMidi.enable({ sysex: true });
    if (WebMidi.inputs.length <= 0) {
      if (allowDemoFallback) {
        console.log("falling back to demo mode");
        this.connectDemo();
        return;
      } else {
        throw new Error(
          "no WebMidi inputs found. Check midi cable. Try sending messages here for debugging: https://www.midimonitor.com/ "
        );
      }
    }

    const channelIn = Array.from(WebMidi.inputs.values()).find((input) => input.name === "monologue KBD/KNOB");
    if (channelIn) {
      console.log(`connected to monologue out. Recieving messages from ${channelIn.name}`);
    }

    channelIn?.addListener("midimessage", this.handleParameterChange);
  };
}
