// prettier-ignore
import { fifthSaw, Delayed, LeidenLoop, ShapeShifter, VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic, MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s, FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass, RawBass, VideoGame, Digisnd, fifthBrass, afxBass, Ardkore92, Duophony, Flute, HarmonBa, MTdigArp, PWMenvBA, Ratewobble, SyncLAM, SyncMtion, afxAcid, afxBeat, akunk, aliasBass, ascension, beatAndBass, bnsbeats1, bnsbeats2, bnsbeats3, bnsbeats4, bnsbeats5, centipede, deepBass, epicAcid, model800, phaseClks, wavetable, xocPlay, Anfem, ArcLead, ArpmeLead, BitterLead, Bosshog, BouncyBalls, BrokenArcade, Childhood, Chopchoon, CpuCycles, Dambuster, DarkPerc, DirtySub, Disemvowel, DistortedSqr, DrJuice, DualSaw, FmodSeq, Fake30SC, GhostTown, HardRun, HerdOfCrab, HoodieBass, Injection, Jackathon, JungleSub, Lfoiled, LittleGlitch, LoudSiren, LuFuki, MilkyWay, MonoBrass, OiOi, OnTheMoon, Portrythm, Pumpdriver, RobotEmpire, Robotspeak, RubberDuck, Scoooping, Squelf, StabbyBass, StomachWave, Stonecold, Syncwave, TechStab, TeeVeeSaw, TronIines, Werq,} from "../patches/exports";
import { cleanName } from "../utils/utils";

// prettier-ignore
const dutchBass = [afxAcid, Injection, Fake30SC, TeeVeeSaw, fifthSaw, Delayed, LeidenLoop, ShapeShifter, VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic, MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s, FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass, RawBass, VideoGame];

// prettier-ignore
const defaults = [Digisnd, fifthBrass, afxBass, Ardkore92, Duophony, Flute, HarmonBa, MTdigArp, PWMenvBA, Ratewobble, SyncLAM, SyncMtion, afxAcid, afxBeat, akunk, aliasBass, ascension, beatAndBass, bnsbeats1, bnsbeats2, bnsbeats3, bnsbeats4, bnsbeats5, centipede, deepBass, epicAcid, model800, phaseClks, wavetable, xocPlay, Anfem, ArcLead, ArpmeLead, BitterLead, Bosshog, BouncyBalls, BrokenArcade, Childhood, Chopchoon, CpuCycles, Dambuster, DarkPerc, DirtySub, Disemvowel, DistortedSqr, DrJuice, DualSaw, FmodSeq, Fake30SC, GhostTown, HardRun, HerdOfCrab, HoodieBass, Injection, Jackathon, JungleSub, Lfoiled, LittleGlitch, LoudSiren, LuFuki, MilkyWay, MonoBrass, OiOi, OnTheMoon, Portrythm, Pumpdriver, RobotEmpire, Robotspeak, RubberDuck, Scoooping, Squelf, StabbyBass, StomachWave, Stonecold, Syncwave, TechStab, TeeVeeSaw, TronIines, Werq]

const Patches = ({ category, selectPatch }) => {
  return (
    <>
      {category === "Dutch Bass" && (
        <div className="patch-button_container">
          {dutchBass.map((item, index) => {
            return (
              <div
                key={index}
                className="patch-button"
                onClick={() => selectPatch(item)}
              >
                {cleanName(item.patchName)}
              </div>
            );
          })}
        </div>
      )}
      {category === "Default" && (
        <div className="patch-button_container">
          {defaults.map((item, index) => {
            return (
              <div
                key={index}
                className="patch-button"
                onClick={() => selectPatch(item)}
              >
                {cleanName(item.patchName)}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Patches;
