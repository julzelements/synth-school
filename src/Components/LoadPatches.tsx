import { Button } from "@mantine/core";
import { createNewPatch, getAllPatches, getPatchById } from "../api/Patches";


const LoadPatches = ({patchName}) => (
  <>
    <Button
      onClick={() => createNewPatch(patchName)}
      size="xl"
      className="menu-button"
      color="blue"
    >
      Save Patch
    </Button>
    <Button
      onClick={getAllPatches}
      size="xl"
      className="menu-button"
      color="yellow"
    >
      Get Patches
    </Button>
    <Button
      onClick={() => getPatchById(1)}
      size="xl"
      className="menu-button"
      color="red"
    >
      Get PatchbyId
    </Button>
  </>
);

export default LoadPatches
