import { Drawer, Button } from "@mantine/core";
import "../assets/styles/patches.scss";
import CategoryButton from "./CategoryButton";

// prettier-ignore
import { fifthSaw, Delayed, LeidenLoop, ShapeShifter, VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic, MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s, FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass, RawBass, VideoGame, Digisnd, fifthBrass, afxBass, Ardkore92, Duophony, Flute, HarmonBa, MTdigArp, PWMenvBA, Ratewobble, SyncLAM, SyncMtion, afxAcid, afxBeat, akunk, aliasBass, ascension, beatAndBass, bnsbeats1, bnsbeats2, bnsbeats3, bnsbeats4, bnsbeats5, centipede, deepBass, epicAcid, model800, phaseClks, wavetable, xocPlay, Anfem, ArcLead, ArpmeLead, BitterLead, Bosshog, BouncyBalls, BrokenArcade, Childhood, Chopchoon, CpuCycles, Dambuster, DarkPerc, DirtySub, Disemvowel, DistortedSqr, DrJuice, DualSaw, FmodSeq, Fake30SC, GhostTown, HardRun, HerdOfCrab, HoodieBass, Injection, Jackathon, JungleSub, Lfoiled, LittleGlitch, LoudSiren, LuFuki, MilkyWay, MonoBrass, OiOi, OnTheMoon, Portrythm, Pumpdriver, RobotEmpire, Robotspeak, RubberDuck, Scoooping, Squelf, StabbyBass, StomachWave, Stonecold, Syncwave, TechStab, TeeVeeSaw, TronIines, Werq,} from "../patches/exports";

const Buttons = ({
  selectPatch,
  connectMidi,
  setOpened,
  opened,
}) => {
  const handleRandomClick = () => {
    let randomPatch = Math.floor(Math.random() * patchArray.length);
    selectPatch(patchArray[randomPatch]);
  };

  // prettier-ignore
  const patchArray = [afxAcid, Injection, Fake30SC, TeeVeeSaw, fifthSaw, Delayed, LeidenLoop, ShapeShifter, VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic, MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s, FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass, RawBass, VideoGame, Digisnd, fifthBrass, afxBass, Ardkore92, Duophony, Flute, HarmonBa, MTdigArp, PWMenvBA, Ratewobble, SyncLAM, SyncMtion, afxAcid, afxBeat, akunk, aliasBass, ascension, beatAndBass, bnsbeats1, bnsbeats2, bnsbeats3, bnsbeats4, bnsbeats5, centipede, deepBass, epicAcid, model800, phaseClks, wavetable, xocPlay, Anfem, ArcLead, ArpmeLead, BitterLead, Bosshog, BouncyBalls, BrokenArcade, Childhood, Chopchoon, CpuCycles, Dambuster, DarkPerc, DirtySub, Disemvowel, DistortedSqr, DrJuice, DualSaw, FmodSeq, Fake30SC, GhostTown, HardRun, HerdOfCrab, HoodieBass, Injection, Jackathon, JungleSub, Lfoiled, LittleGlitch, LoudSiren, LuFuki, MilkyWay, MonoBrass, OiOi, OnTheMoon, Portrythm, Pumpdriver, RobotEmpire, Robotspeak, RubberDuck, Scoooping, Squelf, StabbyBass, StomachWave, Stonecold, Syncwave, TechStab, TeeVeeSaw, TronIines, Werq,]

  return (
    <div className="patches">
      <div className="menu-button_container">
        <Button
          onClick={() => setOpened(true)}
          size="md"
          className="menu-button"
        >
          📗 View patches
        </Button>
        <Button
          onClick={() => handleRandomClick()}
          size="md"
          className="menu-button"
        >
          🎲 Random patch!
        </Button>
      </div>
      <div className="menu-button_container">
        <Button
          className="menu-button"
          onClick={() => connectMidi()}
          size="xs"
          color="dark"
        >
         🎹 Connect Midi
        </Button>
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Patches"
        padding="xl"
        size="xl"
        styles={{
          title: { fontSize: "48px", letterSpacing: "2px" },
          closeButton: { color: "red" },
        }}
        transition="slide-right"
        transitionDuration={250}
        transitionTimingFunction="ease"
      >
        <div className="category-button_container">
          <CategoryButton categoryName="Default" selectPatch={selectPatch} />
          <CategoryButton categoryName="Dutch Bass" selectPatch={selectPatch} />
        </div>
      </Drawer>
    </div>
  );
};

export default Buttons;
