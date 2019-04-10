import { validateInput, validateAmounts } from "./bigBand";

test("validates if input is positive", () => {
  expect(validateInput(-1)).toBe(false);
});

test("validates if input is integer", () => {
  expect(validateInput(1.1)).toBe(false);
});

test("validates if input is less than 100", () => {
  expect(validateInput(101)).toBe(false);
});

test("validates if input is correct inside the validateAmounts function", () => {
  expect(validateAmounts(4.1, [10, 10, 10, 10])).toBe(false);
});

test("validates if the quantity of band members is equal to the input", () => {
  expect(validateAmounts(4, [10, 10, 10])).toBe(false);
});

test("validates if the amount of each band member is less than 1000", () => {
  expect(validateAmounts(3, [1001, 10, 10])).toBe(false);
});

test("validates if the amount of each band member is less than 1000", () => {
  expect(validateAmounts(3, [10, -10, 10])).toBe(false);
});
