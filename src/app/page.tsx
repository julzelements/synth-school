"use client";

import MonologueController from "utils/midi";
import blob from "assets/data.json";
import App from "components/App";
import { KorgProgramDump } from "types/types";

export default function Home() {
  const monologueController = new MonologueController();

  const data: KorgProgramDump = {
    ...blob,
  };

  return <App korgProgramDump={data} monologueController={monologueController} />;
}
