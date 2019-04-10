import {
  validateInput,
  validateAmounts,
  calcAmountToExchange
} from "./bigBand";

test("validates if input is positive", () => {
  expect(validateInput(-1)).toBe(false);
});

test("validates if input is integer", () => {
  expect(validateInput(1.1)).toBe(false);
});

test("validates if input is less than 100", () => {
  expect(validateInput(101)).toBe(false);
});

test("validates if the amount of each band member is less than 1000", () => {
  expect(validateAmounts([1001, 10, 10])).toBe(false);
});

test("validates if the amount of each band member is less than 1000", () => {
  expect(validateAmounts([10, -10, 10])).toBe(false);
});

test("validates if the input is correct inside the calcAmountExchange function", () => {
  expect(calcAmountToExchange(-1, [10, -10, 10])).toBe(false);
});

test("validates if amounts correct inside the calcAmountExchange function", () => {
  expect(calcAmountToExchange(3, [10, 1001, 10])).toBe(false);
});

test("validates if the value of the input is equal than the quantity of amounts", () => {
  expect(calcAmountToExchange(3, [10, -10, 10, 11])).toBe(false);
});
