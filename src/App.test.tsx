import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import MonologueController from "./midi/midi";
import data from "./data.json";

// Note this is real bad and should be replaced with a mock
const monologueController = new MonologueController();

test("renders learn react link", () => {
  render(<App korgProgramDump={data} monologueController={monologueController} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
