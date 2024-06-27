import { ParameterType, Parameters } from "../ParameterHash";
import { convertToMidiRange, convertToSysexRange } from "../utils/conversions";
const linear = Parameters.CUTOFF;
const threePole = Parameters.VCO1_WAVE;
const invertible = Parameters.ENV_INTENSITY;

test("linear midrange", () => {
  expect(linear.type).toBe(ParameterType.LINEAR);
  expect(convertToSysexRange(23, linear)).toBe(185);
});
test("linear minimum", () => {
  expect(linear.type).toBe(ParameterType.LINEAR);
  expect(convertToSysexRange(0, linear)).toBe(0);
});
test("linear maximum", () => {
  expect(linear.type).toBe(ParameterType.LINEAR);
  expect(convertToSysexRange(127, linear)).toBe(1023);
});
// If the weird inverted pot is involved, the mapping is different
// 63 - 0 maps across to min - max, inverted = true
// 64 - 127 maps across to min - max, inverted = false
// |-------|-------||-------|-------|----------|
// |   -1  | -511  ||   0   |  511  | sysex    |
// |-------|-------||-------|-------|----------|
// |   0   |  63   ||  64   |  127  | midi     |
// |-------|-------||-------|-------|----------|
// |  max  | min   || min   |  max  | knob     |
// |-------|-------||-------|-------|----------|
// |  270  |  0    ||  0    |  270  | degrees  |
// |-------|-------||-------|-------|----------|
// |    INVERTED   ||  NON-INVERTED | inverted?|
// |-------|-------||-------|-------|----------|
describe("convert a midi value to a sysex value", () => {
  describe("LINEAR INVERTED", () => {
    describe("inverted range 0-63", () => {
      test("minimum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToSysexRange(0, invertible)).toBe(-1);
      });
      test("midrange", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToSysexRange(25, invertible)).toBe(-203);
      });
      test("maximum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToSysexRange(63, invertible)).toBe(-511);
      });
    });
    describe("non-inverted range 64-123", () => {
      test("minimum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToSysexRange(64, invertible)).toBe(0);
      });
      test("midrange", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToSysexRange(102, invertible)).toBe(308);
      });
      test("maximum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToSysexRange(127, invertible)).toBe(511);
      });
    });
  });
});
describe("convert a sysex value to a midi value", () => {
  describe("LINEAR INVERTED", () => {
    describe("inverted range -1 to -511", () => {
      test("minimum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToMidiRange(-1, invertible)).toBe(0);
      });
      test("midrange", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToMidiRange(-203, invertible)).toBe(25);
      });
      test("maximum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToMidiRange(-511, invertible)).toBe(63);
      });
    });
    describe("non-inverted range 0 to 511", () => {
      test("minimum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToMidiRange(0, invertible)).toBe(64);
      });
      test("midrange", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToMidiRange(308, invertible)).toBe(102);
      });
      test("maximum", () => {
        expect(invertible.type).toBe(ParameterType.LINEAR_INVERTED);
        expect(convertToMidiRange(511, invertible)).toBe(127);
      });
    });
  });
});

test("threePole midrange", () => {
  expect(threePole.type).toBe(ParameterType.THREE_POLE);
  expect(convertToSysexRange(1, threePole)).toBe(1);
});
test("threePole minimum", () => {
  expect(threePole.type).toBe(ParameterType.THREE_POLE);
  expect(convertToSysexRange(0, threePole)).toBe(0);
});
test("threePole maximum", () => {
  expect(threePole.type).toBe(ParameterType.THREE_POLE);
  expect(convertToSysexRange(2, threePole)).toBe(2);
});
