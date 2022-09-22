import { useState } from "react";

const Recorder = () => {
  const [mediaStream, setMediaStream] = useState<MediaStream | undefined>();
  const [mediaRecorder, setMediaRecorder] = useState<
    MediaRecorder | undefined
  >();
  const [audio, setAudio] = useState<string | undefined>();

  const stopRecording = () => {

  }

  const startRecording = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        let chunks = [];
        const recorder = new MediaRecorder(stream);

        recorder.ondataavailable = (e: BlobEvent) => {
          chunks.push(e.data);
        };
        recorder.onstop = (_) => {
          const blob = new Blob(chunks, { type: "audio/ogg;codecs=opus" });
          chunks = [];
          const audioURL = window.URL.createObjectURL(blob);
          setAudio(audioURL);
        };

        recorder.start();
        
        await new Promise((r) => setTimeout(r, 2000));
        recorder.stop();

        console.log(stream);
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
      <button onClick={startRecording}>Stop Recording</button>
      <audio src={audio} controls={true} />
    </>
  );
};

export default Recorder;
