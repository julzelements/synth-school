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
