// prettier-ignore
import {
  afxAcid, injection, fake3OSC, TeeVeeSaw, fifthSaw, Delayed, LeidenLoop, ShapeShifter, 
  VintageKit, NinetiesClassic, DeltaBass, MiniBass, SimpleBeat, VinylPulse, AcidVox, DutchClassic,
  MotorMouth, SoulFood, VocalChordz, AnalogDrums, ElectroKit, MrMatrix, SyntheBass, Boogie80s,
  FunkyAcid, PortaBass, TechNoir, DanceBass, GrittySquare, PunkFunk, VCTenVox, DeepHouse, KeycityBass,
  RawBass, VideoGame,
} from "../patches/exports";

import { useState } from "react";

import { Drawer, Button } from "@mantine/core";

const Patches = ({ selectPatch, connectMidi }) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="patches">
      <Button onClick={() => setOpened(true)}>Patches</Button>
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
      >
        <button onClick={() => selectPatch(fifthSaw)}>fifthSaw</button>
        <button onClick={() => selectPatch(Delayed)}>Delayed</button>
        <button onClick={() => selectPatch(LeidenLoop)}>LeidenLoop</button>
        <button onClick={() => selectPatch(ShapeShifter)}>ShapeShifter</button>
        <button onClick={() => selectPatch(VintageKit)}>VintageKit</button>
        <button onClick={() => selectPatch(NinetiesClassic)}>NinetiesClassic</button>
        <button onClick={() => selectPatch(DeltaBass)}>DeltaBass</button>
        <button onClick={() => selectPatch(MiniBass)}>MiniBass</button>
        <button onClick={() => selectPatch(SimpleBeat)}>SimpleBeat</button>
        <button onClick={() => selectPatch(VinylPulse)}>VinylPulse</button>
        <button onClick={() => selectPatch(AcidVox)}>AcidVox</button>
        <button onClick={() => selectPatch(DutchClassic)}>DutchClassic</button>
        <button onClick={() => selectPatch(MotorMouth)}>MotorMouth</button>
        <button onClick={() => selectPatch(SoulFood)}>SoulFood</button>
        <button onClick={() => selectPatch(VocalChordz)}>VocalChordz</button>
        <button onClick={() => selectPatch(AnalogDrums)}>AnalogDrums</button>
        <button onClick={() => selectPatch(ElectroKit)}>ElectroKit</button>
        <button onClick={() => selectPatch(MrMatrix)}>MrMatrix</button>
        <button onClick={() => selectPatch(SyntheBass)}>SyntheBass</button>
        <button onClick={() => selectPatch(Boogie80s)}>Boogie80s</button>
        <button onClick={() => selectPatch(FunkyAcid)}>FunkyAcid</button>
        <button onClick={() => selectPatch(PortaBass)}>PortaBass</button>
        <button onClick={() => selectPatch(TechNoir)}>TechNoir</button>
        <button onClick={() => selectPatch(DanceBass)}>DanceBass</button>
        <button onClick={() => selectPatch(GrittySquare)}>GrittySquare</button>
        <button onClick={() => selectPatch(PunkFunk)}>PunkFunk</button>
        <button onClick={() => selectPatch(VCTenVox)}>VCTenVox</button>
        <button onClick={() => selectPatch(DeepHouse)}>DeepHouse</button>
        <button onClick={() => selectPatch(KeycityBass)}>KeycityBass</button>
        <button onClick={() => selectPatch(RawBass)}>RawBass</button>
        <button onClick={() => selectPatch(VideoGame)}>VideoGame</button>
        <button onClick={() => selectPatch(injection)}>injection</button>
        <button onClick={() => selectPatch(afxAcid)}>afxAcid</button>
        <button onClick={() => selectPatch(fake3OSC)}>fake3OSC</button>
        <button onClick={() => selectPatch(TeeVeeSaw)}>TeeVeeSaw</button>
        <button onClick={() => connectMidi()}>ConnectMidi</button>
      </Drawer>
    </div>
  );
};

export default Patches;
