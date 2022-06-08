import { WebMidi } from "webmidi";
import { ParameterType, ParameterHash, Parameter } from "../ParameterHash";

const MESSAGE_NUMBER = 176;

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

      const [_, messageParameter, value] = e.data; // eslint-disable-line @typescript-eslint/no-unused-vars

      if (messageParameter !== parameter.ID) {
        return;
      }

      const knobValue = Math.round((value / 123) * 1027);
      const threePoleValue = (value / 123) * 2;
      const fourPoleValue = (value / 123) * 3;

      let finalValue;
      if (parameter.type === ParameterType.LINEAR) {
        finalValue = knobValue;
      }

      if (parameter.type === ParameterType.THREE_POLE) {
        finalValue = threePoleValue;
      }

      if (parameter.type === ParameterType.FOUR_POLE) {
        finalValue = fourPoleValue;
      }

      callback(parameter, finalValue);
    });
  };

  connectDemo = async () => {
    this.demoMode = true;
    console.log("demo mode");
  };

  connect = async (allowDemoFallback: boolean) => {
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

  setParameter = (parameter: Parameter, value: number) => {
    if (this.demoMode) {
      return;
    }
    const channelOut = WebMidi.outputs[0].channels[1];
    const finalValue = Math.round((value / 1023) * 127);

    console.log(
      `setting parameter ${parameter.name} to ${finalValue}: ${value}`
    );

    channelOut.send([MESSAGE_NUMBER, parameter.ID, finalValue]);
  };
}
