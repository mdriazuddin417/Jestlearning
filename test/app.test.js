const { add } = require("../app");

test("2+3 should return 5 ", () => {
  expect(add(2 + 3)).toEqual(5);
});

test("5+8 should not return anything that is not 13", () => {
  expect(add(5 + 8)).not.toEqual(58);
});

test("should throw an error if arguments are not number", () => {});
