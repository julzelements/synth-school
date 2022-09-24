import { useState } from "react";

interface Props {
  patchName: string;
}

const Recorder = (props: Props) => {
  const { patchName } = props;
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [audio, setAudio] = useState<string>();

  const saveRecording = async () => {
    const patch = await fetch("http://localhost:3001/patches", {
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
    });
    console.log(patch, patchName);
  };

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
          const blob = new Blob(chunks, { type: "audio/ogg;codecs=opus" });
          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);
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
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={() => mediaRecorder.stop()}>Stop Recording</button>
      <audio src={audio} controls={true} />
      <button onClick={saveRecording}>Save recording</button>
    </>
  );
};

export default Recorder;
