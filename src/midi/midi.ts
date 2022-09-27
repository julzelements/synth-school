import { WebMidi } from "webmidi";
import { Parameter } from "../ParameterHash";

const PARAM_CHANGE_MESSAGE = 176;

export default class MonologueController {
  constructor() {
    console.log("monologue controller is initialised");
  }

  demoMode = false;

  registeredParameters = {};
  onParameterChange = (parameter: Parameter, callback: Function) => {
    this.registeredParameters[parameter.ID] = {
      parameter,
      callback,
    };
  };

  handleParameterChange = (e: any) => {
    if (this.demoMode) {
      return;
    }

    Object.keys(this.registeredParameters).map((id) => {
      const { parameter, callback } = this.registeredParameters[id];
      const [message, messageParameter, value] = e.data; // eslint-disable-line @typescript-eslint/no-unused-vars
      // We only want to listen to param change messages
      if (message !== PARAM_CHANGE_MESSAGE) return null;

      if (messageParameter !== parameter.ID) {
        return null;
      }

      return callback(parameter, value);
    });
  };

  setParameter = (parameter: Parameter, value: number) => {
    if (this.demoMode) {
      return;
    }

    const channelOut = WebMidi.outputs[0].channels[1];

    console.log(
      `setting parameter ${parameter.name}:${parameter.ID} to ${value}`
    );

    channelOut.sendControlChange(parameter.ID, value);
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
        this.connectDemo();
        return;
      } else {
        throw new Error(
          "no WebMidi inputs found. Check midi cable. Try sending messages here for debugging: https://www.midimonitor.com/ "
        );
      }
    }

    const channelIn = WebMidi.inputs[0].channels[1];
    channelIn?.addListener("midimessage", this.handleParameterChange);
  };
}
