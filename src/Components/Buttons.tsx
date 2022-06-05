import { Drawer, Button, Collapse } from "@mantine/core";
import "../assets/styles/patches.scss";
import Patches from "./Patches";

// prettier-ignore
import {
  afxAcid, Injection, Fake30SC, TeeVeeSaw, fifthSaw, Delayed, LeidenLoop, ShapeShifter, 
  VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic,
  MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s,
  FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass,
  RawBass, VideoGame,
} from "../patches/exports";

const Buttons = ({ selectPatch, connectMidi, setOpened, opened, setCollapseOpen, collapseOpen }) => {
  const handleRandomClick = () => {
    let randomPatch = Math.floor(Math.random() * patchArray.length);
    selectPatch(patchArray[randomPatch]);
  };

  // prettier-ignore
  const patchArray = [afxAcid, Injection, Fake30SC, TeeVeeSaw, fifthSaw, Delayed, LeidenLoop, ShapeShifter, 
  VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic,
  MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s,
  FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass,
  RawBass, VideoGame]

  return (
    <div className="patches">
      <div className="menu-button_container">
        <Button onClick={() => setOpened(true)} size="xl" className="menu-button" color="indigo">
          Patches
        </Button>
        <Button className="menu-button" onClick={() => connectMidi()} size="lg" color="cyan">
          Connect Midi
        </Button>
        <Button onClick={() => handleRandomClick()} size="xl" className="menu-button" color="orange">
          Random
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
          <div className="category-button" onClick={() => setCollapseOpen(!collapseOpen)}>
            Dutch Bass
            <span style={{ color: "333333" }}>&#9660;</span>
          </div>
        </div>
        <Collapse in={collapseOpen}>
          <Patches selectPatch={selectPatch} />
        </Collapse>
      </Drawer>
    </div>
  );
};

export default Buttons;
