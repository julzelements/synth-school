export const rangeMap = (valueMin: number, valueMax: number, rangeMin: number, rangeMax: number, value: number) => {
  return ((value - valueMin) / (valueMax - valueMin)) * (rangeMax - rangeMin) + rangeMin;
};

export const midiRangeMax = 127;
export const potentiometerRangeMax = 1023;

export const cursorCoordsToDegrees = (
  cX: number,
  cY: number,
  pts: { x: any; y: any },
  startAngle: number,
  endAngle: number
) => {
  const x = cX - pts.x;
  const y = cY - pts.y;
  let deg = (Math.atan(y / x) * 180) / Math.PI;
  if ((x < 0 && y >= 0) || (x < 0 && y < 0)) {
    deg += 90;
  } else {
    deg += 270;
  }
  let finalDeg = Math.min(Math.max(startAngle, deg), endAngle);
  return finalDeg;
};

type MidiRange = number & { readonly _midiRange: unique symbol };
type PotentiometerRange = number & { readonly _potentiometerRange: unique symbol };

const isMidiRange = (value: number): value is MidiRange => {
  return value >= 0 && value <= 127;
};

const isPotentiometerRange = (value: number): value is PotentiometerRange => {
  return value >= 0 && value <= 1023;
};

export const convertToPotentiometerRange = (value: number): PotentiometerRange => {
  if (!isMidiRange(value)) {
    throw new Error("Value must be in the range 0-127");
  }
  return Math.round((value / 127) * 1023) as PotentiometerRange;
};

export const convertToMidiRange = (value: number): MidiRange => {
  if (!isPotentiometerRange(value)) {
    throw new Error("Value must be in the range 0-1023");
  }
  return Math.round((value / 1023) * 127) as MidiRange;
};
