import { getDegrees } from "./../src/utils";

test("270 arc, at 50% should be 0", () => {
  expect(getDegrees(0, 100, -135, 135, 50)).toBe(0);
});
test("270 arc, at 0%, should be -135", () => {
  expect(getDegrees(0, 100, -135, 135, 0)).toBe(-135);
});
test("270 arc, at 100% should be 135", () => {
  expect(getDegrees(0, 100, -135, 135, 100)).toBe(135);
});
