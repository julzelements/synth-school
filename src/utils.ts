export const rangeMap = (
  valueMin: number,
  valueMax: number,
  rangeMin: number,
  rangeMax: number,
  value: number
) => {
  return (value - valueMin)
  / (valueMax - valueMin)
  * (rangeMax - rangeMin) + rangeMin;
};

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
