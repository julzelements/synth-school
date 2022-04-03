export const getDegrees = (
  paramMin: number,
  paramMax: number,
  startAngle: number,
  endAngle: number,
  paramValue: number
) => {
  return Math.floor(
    ((paramValue - paramMin) * (endAngle - startAngle)) /
      (paramMax - paramMin) +
      startAngle
  );
};

export const finalDeg = (
  cX: number,
  cY: number,
  pts: { x: any; y: any },
  startAngle: number,
  endAngle: number
) => {
  console.log("cY", cX);
  console.log("cX", cX);
  console.log("pts", pts);
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
