import { getDegrees } from "./../src/utils";

test("getDegrees", () => {
  expect(getDegrees(0, 100, 0, 180, 50)).toBe(90);
});
