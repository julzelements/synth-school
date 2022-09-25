export const uploadAudioXML = (blob: Blob, patchName: string) => {
  const formData = new FormData();
  formData.append("blob", blob, `${patchName}.ogg`);

  const request = new XMLHttpRequest();
  request.open("POST", "http://localhost:3001/audio");
  request.onreadystatechange = () => {
    if (request.DONE) {
      console.log(request.response);
    }
  };
  request.send(formData);
};
