import { useState } from "react";

interface Props {
  patchName: string;
}

const Recorder = (props: Props) => {
  const { patchName } = props;
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder>();
  const [audio, setAudio] = useState<string>();

  const saveRecording = (blob: Blob) => {
    const formData = new FormData();
    formData.append("blob", blob);
    
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3001/audio");
    request.send(formData);
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
          saveRecording(blob);
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
      <button
        onClick={() => {
          console.log("todo");
        }}
      >
        Save recording
      </button>
    </>
  );
};

export default Recorder;
