// Consider the scenario where you have a value of 42 that falls within an original range of 0 to 126
// and you want to map this value to a new range of 0 to 360 degrees.
//
// rangeMap(0, 126, 0, 360, 42);
//
// Original Range:   0          42          84         126
//                   |-----------|-----------|-----------|
//                   |           42                      |
// Target Range:     0          120         240         360
//                   |-----------|-----------|-----------|
//                   |           120                     |

export const rangeMap = (valueMin: number, valueMax: number, rangeMin: number, rangeMax: number, value: number) => {
  console.log({ rangeMax, value });
  return ((value - valueMin) / (valueMax - valueMin)) * (rangeMax - rangeMin) + rangeMin;
};

// If the weird inverted pot is involved, the mapping is different
// 63 - 0 maps across to min - max, inverted = true
// 64 - 127 maps across to min - max, inverted = false

export const getInvertedState = (invertable: boolean, value: number) => {
  return true;
};

export const invertedRangeMap = (inverted: boolean, value: number) => {};

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
