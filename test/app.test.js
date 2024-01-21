const { add, IsEven } = require("../app");

test("2+3 should return 5 ", () => {
  expect(add(2, 3)).toEqual(5);
  expect(add(3, 8)).toEqual(11);
  expect(add(10, 10)).toEqual(20);
});

test("should throw an error if arguments are not number", () => {
  expect(() => add("A", 10).toThrow());
});

test("isEven() should return true", () => {
  expect(IsEven(10)).toBe(true);
  expect(IsEven(22)).toBe(true);
  expect(IsEven(40)).toBe(true);
  expect(IsEven(98)).toBe(true);
});

test("isEven() should return false", () => {
  expect(IsEven(1)).toBe(false);
  expect(IsEven(99)).toBe(false);
  expect(IsEven(121)).toBe(false);
  expect(IsEven(75)).toBe(false);
});

test("IsEven() should throw and error", () => {
  expect(() => IsEven("10")).toThrow();
  expect(() => IsEven(true)).toThrow();
  expect(() => IsEven(false)).toThrow();
  expect(() => IsEven(undefined)).toThrow();
  expect(() => IsEven({})).toThrow();
  expect(() => IsEven([])).toThrow();
});
