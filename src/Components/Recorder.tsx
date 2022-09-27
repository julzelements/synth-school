import { useState } from "react";
import { uploadAudioXML } from "../api/Audio";

interface Props {
  patchName: string;
}

const Recorder = (props: Props) => {
  const { patchName } = props;
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [audio, setAudio] = useState<string>();
  const [blob, setBlob] = useState<Blob>();

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        let chunks = [];
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (e: BlobEvent) => {
          chunks.push(e.data);
        };
        recorder.onstop = (_) => {
          console.log("recording stopped");
          const tempBlob = new Blob(chunks, { type: "audio/ogg;codecs=opus" });
          setBlob(tempBlob);
          chunks = [];
          const audioURL = window.URL.createObjectURL(tempBlob);
          setAudio(audioURL);
        };
        recorder.onstart = (_) => console.log("recording started");
        recorder.start();
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("getMediaUser not supported on your browser!");
    }
  };

  return (
    <>
      <audio src={audio} controls={true} />
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={() => mediaRecorder.stop()}>Stop Recording</button>
      <button onClick={() => uploadAudioXML(blob, patchName)}>Save recording</button>
    </>
  );
};

export default Recorder;
