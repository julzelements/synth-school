import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import MonologueController from "./midi/midi";
import data from "./data.json";

// Note this is real bad and should be replaced with a mock
const monologueController = new MonologueController();

test("renders learn react link", () => {
  render(<App korgProgramDump={data} monologueController={monologueController} />);
  const linkElement = screen.getByText(/connect midi/i);
  expect(linkElement).toBeInTheDocument();
  screen.debug(screen.getByText(/resonance/i));
  screen.logTestingPlaygroundURL();

  const cutoff = screen.getByTestId("Cutoff");
  expect(cutoff).toHaveStyle("transform: rotate(225.87487781036168deg)");

  const envIntensity = screen.getAllByTestId("Int");
  expect(envIntensity[0].style.transform).toBe("rotate(81.09803921568627deg)");
  expect(envIntensity[1].style.transform).toBe("rotate(50deg)");
});
