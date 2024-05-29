import { Misc } from "../types";

interface MiscParamsProps {
  miscParams: Misc;
}

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
        {portamentMode.name} : {portamentMode.value ? "On" : "Off"}
      </div>
      <div>
        {portamentTime.name} : {portamentTime.value}
      </div>
      <div>
        {cutoffVelocity.name} : {cutoffVelocity.value}
      </div>
      <div>
        {cutoffKeyTrack.name} : {cutoffKeyTrack.value}
      </div>
      <div>
        {sliderAssign.name} : {sliderAssign.value}
      </div>
    </div>
  );
};
export default MiscParams;
