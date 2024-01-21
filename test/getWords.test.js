const getWords = require("../src/getWords");

test("should throw an error if it is not a string", () => {
  expect(() => getWords(100)).toThrow();
  expect(() => getWords(true)).toThrow();
  expect(() => getWords(false)).toThrow();
  expect(() => getWords(["words"])).toThrow();
  expect(() => getWords({ name: "words" })).toThrow();
  expect(() => getWords(undefined)).toThrow();
});

test("should return the same string if the argument is a word", () => {
  //   expect(getWords("Riaz")).toBe("Riaz");
  //   expect(getWords("Kest")).toBe("Kest");
  //   expect(getWords("Javascript")).toBe("Javascript");
});

test("should return the array of string", () => {
  //   expect(getWords("Riaz Uddin")).toHaveLength(2);
  //   expect(words).toContain("Riaz");
  //   const words2 = getWords("Test Driven Development");
  //   expect(words2).toHaveLength(3);
  //   expect(words2).toContain("Test");
});
