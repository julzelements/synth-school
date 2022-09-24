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
  patchName,
}) => {
  const handleRandomClick = () => {
    let randomPatch = Math.floor(Math.random() * patchArray.length);
    selectPatch(patchArray[randomPatch]);
  };

  const handleSavePatch = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "name": "bassWobble"
    });
    
    var requestOptions: RequestInit = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/patches", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  const handleGetPatches = async () => {
    var requestOptions: RequestInit = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("http://localhost:3001/patches", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  // prettier-ignore
  const patchArray = [afxAcid, Injection, Fake30SC, TeeVeeSaw, fifthSaw, Delayed, LeidenLoop, ShapeShifter, VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic, MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s, FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass, RawBass, VideoGame, Digisnd, fifthBrass, afxBass, Ardkore92, Duophony, Flute, HarmonBa, MTdigArp, PWMenvBA, Ratewobble, SyncLAM, SyncMtion, afxAcid, afxBeat, akunk, aliasBass, ascension, beatAndBass, bnsbeats1, bnsbeats2, bnsbeats3, bnsbeats4, bnsbeats5, centipede, deepBass, epicAcid, model800, phaseClks, wavetable, xocPlay, Anfem, ArcLead, ArpmeLead, BitterLead, Bosshog, BouncyBalls, BrokenArcade, Childhood, Chopchoon, CpuCycles, Dambuster, DarkPerc, DirtySub, Disemvowel, DistortedSqr, DrJuice, DualSaw, FmodSeq, Fake30SC, GhostTown, HardRun, HerdOfCrab, HoodieBass, Injection, Jackathon, JungleSub, Lfoiled, LittleGlitch, LoudSiren, LuFuki, MilkyWay, MonoBrass, OiOi, OnTheMoon, Portrythm, Pumpdriver, RobotEmpire, Robotspeak, RubberDuck, Scoooping, Squelf, StabbyBass, StomachWave, Stonecold, Syncwave, TechStab, TeeVeeSaw, TronIines, Werq,]

  return (
    <div className="patches">
      <div className="menu-button_container">
        <Button
          onClick={() => setOpened(true)}
          size="xl"
          className="menu-button"
          color="indigo"
        >
          Patches
        </Button>
        <Button
          className="menu-button"
          onClick={() => connectMidi()}
          size="lg"
          color="cyan"
        >
          Connect Midi
        </Button>
        <Button
          onClick={() => handleRandomClick()}
          size="xl"
          className="menu-button"
          color="orange"
        >
          Random
        </Button>
        <Button
          onClick={handleSavePatch}
          size="xl"
          className="menu-button"
          color="blue"
        >
          Save Patch
        </Button>
        <Button
          onClick={handleGetPatches}
          size="xl"
          className="menu-button"
          color="yellow"
        >
          Get Patches
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
