import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import blob from "./data.json";
import { KorgProgramDump } from "./types";
import MonologueController from "./midi/midi";

const monologueController = new MonologueController();

const data: KorgProgramDump = {
  ...blob,
};

monologueController.connect().then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App korgProgramDump={data} monologueController={monologueController} />
    </React.StrictMode>,
    document.getElementById("app-root")
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
}).catch((e) => {throw e});
