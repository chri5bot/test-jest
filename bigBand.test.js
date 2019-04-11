import {
  validateInput,
  validateAmounts,
  calcAmountToExchange
} from "./bigBand";

test("validates if input is 0", () => {
  expect(validateInput(0)).toBe(false);
});

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

test("validates if amounts are correct", () => {
  expect(validateAmounts([10.0, 10.0, 10.0])).toBe(true);
});

test("validates if the input is correct inside the calcAmountExchange function", () => {
  expect(calcAmountToExchange(-1, [10, -10, 10])).toBe(false);
});

test("validates if amounts are correct inside the calcAmountExchange function", () => {
  expect(calcAmountToExchange(3, [10, 1001, 10])).toBe(false);
});

test("validates if the value of the input is equal than the quantity of amounts", () => {
  expect(calcAmountToExchange(3, [10, -10, 10, 11])).toBe(false);
});

test("first test case", () => {
  const fact = Math.pow(10, 2);
  expect(calcAmountToExchange(3, [10.0, 20.0, 30.0])).toBe(
    Math.floor(10 * fact) / fact
  );
});

test("second test case", () => {
  expect(calcAmountToExchange(4, [15.0, 15.01, 3.0, 3.01])).toBe(11.99);
});

test("third test case", () => {
  expect(calcAmountToExchange(4, [15.0, 14.99, 3.0, 2.99])).toBe(12);
});

test("fourth test case", () => {
  expect(calcAmountToExchange(4, [999.1, 999.1, 999, 999.1])).toBe(0.07);
});

test("fifth test case", () => {
  expect(calcAmountToExchange(3, [100.01, 99.99, 99.99])).toBe(0);
});
