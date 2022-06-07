// prettier-ignore
import {
  afxAcid, Injection, Fake30SC, TeeVeeSaw, fifthSaw, Delayed, LeidenLoop, ShapeShifter, 
  VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic,
  MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s,
  FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass,
  RawBass, VideoGame,
} from "../patches/exports";

const Patches = ({ category, selectPatch }) => {
  return (
    <div className="patch-button_container">
      <div className="patch-button" onClick={() => selectPatch(fifthSaw)}>
        fifthSaw
      </div>
      <div className="patch-button" onClick={() => selectPatch(Delayed)}>
        Delayed
      </div>
      <div className="patch-button" onClick={() => selectPatch(LeidenLoop)}>
        LeidenLoop
      </div>
      <div className="patch-button" onClick={() => selectPatch(ShapeShifter)}>
        ShapeShifter
      </div>
      <div className="patch-button" onClick={() => selectPatch(VintageKit)}>
        VintageKit
      </div>
      <div className="patch-button" onClick={() => selectPatch(NinetiesClassic)}>
        NinetiesClassic
      </div>
      <div className="patch-button" onClick={() => selectPatch(DeltaBass)}>
        DeltaBass
      </div>
      <div className="patch-button" onClick={() => selectPatch(MiniBass)}>
        MiniBass
      </div>
      <div className="patch-button" onClick={() => selectPatch(SimpleBeat)}>
        SimpleBeat
      </div>
      <div className="patch-button" onClick={() => selectPatch(VinylPulse)}>
        VinylPulse
      </div>
      <div className="patch-button" onClick={() => selectPatch(AcidVox)}>
        AcidVox
      </div>
      <div className="patch-button" onClick={() => selectPatch(DutchClassic)}>
        DutchClassic
      </div>
      <div className="patch-button" onClick={() => selectPatch(MotorMouth)}>
        MotorMouth
      </div>
      <div className="patch-button" onClick={() => selectPatch(SoulFood)}>
        SoulFood
      </div>
      <div className="patch-button" onClick={() => selectPatch(VocalChordz)}>
        VocalChordz
      </div>
      <div className="patch-button" onClick={() => selectPatch(AnalogDrums)}>
        AnalogDrums
      </div>
      <div className="patch-button" onClick={() => selectPatch(ElectroKit)}>
        ElectroKit
      </div>
      <div className="patch-button" onClick={() => selectPatch(MrMatrix)}>
        MrMatrix
      </div>
      <div className="patch-button" onClick={() => selectPatch(SyntheBass)}>
        SyntheBass
      </div>
      <div className="patch-button" onClick={() => selectPatch(Boogie80s)}>
        Boogie80s
      </div>
      <div className="patch-button" onClick={() => selectPatch(FunkyAcid)}>
        FunkyAcid
      </div>
      <div className="patch-button" onClick={() => selectPatch(PortaBass)}>
        PortaBass
      </div>
      <div className="patch-button" onClick={() => selectPatch(TechNoir)}>
        TechNoir
      </div>
      <div className="patch-button" onClick={() => selectPatch(DanceBass)}>
        DanceBass
      </div>
      <div className="patch-button" onClick={() => selectPatch(GrittySquare)}>
        GrittySquare
      </div>
      <div className="patch-button" onClick={() => selectPatch(PunkFunk)}>
        PunkFunk
      </div>
      <div className="patch-button" onClick={() => selectPatch(VCTenVox)}>
        VCTenVox
      </div>
      <div className="patch-button" onClick={() => selectPatch(DeepHouse)}>
        DeepHouse
      </div>
      <div className="patch-button" onClick={() => selectPatch(KeycityBass)}>
        KeycityBass
      </div>
      <div className="patch-button" onClick={() => selectPatch(RawBass)}>
        RawBass
      </div>
      <div className="patch-button" onClick={() => selectPatch(VideoGame)}>
        VideoGame
      </div>
      <div className="patch-button" onClick={() => selectPatch(Injection)}>
        injection
      </div>
      <div className="patch-button" onClick={() => selectPatch(afxAcid)}>
        afxAcid
      </div>
      <div className="patch-button" onClick={() => selectPatch(Fake30SC)}>
        fake3OSC
      </div>
      <div className="patch-button" onClick={() => selectPatch(TeeVeeSaw)}>
        TeeVeeSaw
      </div>
    </div>
  );
};

export default Patches;
