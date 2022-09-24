// GET 	    /patches       : Get all patchs
// POST 	  /patches       : Create a new patch

// GET 	   /patches/{id}   : Get the patch information identified by "id"
// PUT  	 /patches/{id}   : Update the patch information identified by "id"
// DELETE	 /patches/{id}   : Delete patch by "id"

export const getPatchById = (id: number) => {
  fetch(`http://localhost:3001/patches/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        console.error(errorMessage);
      });
    });
}

export const getAllPatches = () => {
  fetch("http://localhost:3001/patches")
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export const createNewPatch = (name: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      name,
    }),
    redirect: "follow",
  };

  fetch("http://localhost:3001/patches", requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      err.text().then((errorMessage) => {
        console.error(errorMessage);
      });
    });
};
