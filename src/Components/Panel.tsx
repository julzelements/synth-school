import { Master } from "@/components/panelSections/Master";
import { VCO1 } from "@/components/panelSections/VCO1";
import { Mixer } from "@/components/panelSections/Mixer";
import { Filter } from "@/components/panelSections/Filter";
import { VCO2 } from "@/components/panelSections/VCO2";
import { Envelope } from "@/components/panelSections/Envelope";
import { LFO } from "@/components/panelSections/LFO";
import { Parameters as KorgParameters, Parameter } from "@/types/ParameterHash";
import { ParamState } from "@/types/paramState";

const Panel = ({
  setParamViaCallback,
  paramState,
  Parameters,
}: {
  paramState: ParamState;
  Parameters: typeof KorgParameters;
  setParamViaCallback: (parameter: Parameter) => (finalValue: number) => void;
}) => {
  return (
    <div className="panel-controls">
      <Master
        drive={paramState.drive.value}
        octave={paramState.vco1Octave.value}
        onChangeDrive={setParamViaCallback(Parameters.DRIVE)}
        onChangeOctave={setParamViaCallback(Parameters.VCO1_OCTAVE)}
      />
      <VCO1
        shape={paramState.vco1Shape.value}
        wave={paramState.vco1Wave.value}
        onChangeWave={setParamViaCallback(Parameters.VCO1_WAVE)}
        onChangeShape={setParamViaCallback(Parameters.VCO1_SHAPE)}
      />
      <VCO2
        octave={paramState.vco2Octave.value}
        pitch={paramState.vco2Pitch.value}
        wave={paramState.vco2Wave.value}
        duty={paramState.vco2Duty.value}
        shape={paramState.vco2Shape.value}
        onChangeOctave={setParamViaCallback(Parameters.VCO2_OCTAVE)}
        onChangeWave={setParamViaCallback(Parameters.VCO2_WAVE)}
        onChangeDuty={setParamViaCallback(Parameters.VCO2_DUTY)}
        onChangePitch={setParamViaCallback(Parameters.VCO2_PITCH)}
        onChangeShape={setParamViaCallback(Parameters.VCO2_SHAPE)}
      />
      <Mixer
        vco1Level={paramState.vco1Level.value}
        vco2Level={paramState.vco2Level.value}
        onChangeVCO1LevelValue={setParamViaCallback(Parameters.VCO1_LEVEL)}
        onChangeVCO2LevelValue={setParamViaCallback(Parameters.VCO2_LEVEL)}
      />
      <Filter
        cutoff={paramState.cutoff.value}
        resonance={paramState.resonance.value}
        onChangeCutoff={setParamViaCallback(Parameters.CUTOFF)}
        onChangeResonance={setParamViaCallback(Parameters.RESONANCE)}
      />
      <div className="panel-section" id="eglfo">
        <Envelope
          type={paramState.envType.value}
          attack={paramState.envAttack.value}
          decay={paramState.envDecay.value}
          intensity={paramState.envIntensity.value}
          target={paramState.envTarget.value}
          onChangeType={setParamViaCallback(Parameters.ENV_TYPE)}
          onChangeAttack={setParamViaCallback(Parameters.ENV_ATTACK)}
          onChangeDecay={setParamViaCallback(Parameters.ENV_DECAY)}
          onChangeIntensity={setParamViaCallback(Parameters.ENV_INTENSITY)}
          onChangeTarget={setParamViaCallback(Parameters.ENV_TARGET)}
        />
        <LFO
          wave={paramState.lfoWave.value}
          mode={paramState.lfoMode.value}
          rate={paramState.lfoRate.value}
          intensity={paramState.lfoIntensity.value}
          target={paramState.lfoTarget.value}
          onChangeWave={setParamViaCallback(Parameters.LFO_WAVE)}
          onChangeMode={setParamViaCallback(Parameters.LFO_MODE)}
          onChangeRate={setParamViaCallback(Parameters.LFO_RATE)}
          onChangeIntensity={setParamViaCallback(Parameters.LFO_INTENSITY)}
          onChangeTarget={setParamViaCallback(Parameters.LFO_TARGET)}
        />
      </div>
    </div>
  );
};

export default Panel;
