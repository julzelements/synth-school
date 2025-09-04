import { Misc } from "../types/types";

interface MiscParamsProps {
  miscParams: Misc;
}

const cutoffMap: Record<number, string> = {
  0: "0%",
  1: "50%",
  2: "100%",
};

const MiscParams = (props: MiscParamsProps) => {
  const {
    miscParams: { bpmSync, portamentMode, portamentTime, cutoffVelocity, cutoffKeyTrack, sliderAssign },
  } = props;
  return (
    <div>
      <div>
        {bpmSync.name} : {bpmSync.value ? "On" : "Off"}
      </div>
      <div>
        {portamentMode.name} : {portamentMode.value ? "On" : "Auto"}
      </div>
      <div>
        {portamentTime.name} : {portamentTime.value}
      </div>
      <div>
        {cutoffVelocity.name} : {cutoffMap[cutoffVelocity.value]}
      </div>
      <div>
        {cutoffKeyTrack.name} : {cutoffMap[cutoffKeyTrack.value]}
      </div>
      <div>
        {sliderAssign.name} : {sliderAssign.value}
      </div>
    </div>
  );
};
export default MiscParams;
