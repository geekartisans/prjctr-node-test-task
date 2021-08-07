const { expect } = require("@jest/globals");
const checkParentheses = require("./task3");

describe('checkParentheses function', () => {
  it("shouldn't work for empty value", () => {
    expect(() => {
      checkParentheses();
    }).toThrow('Value must be a string, undefined given')
  });

  it('should work for all test cases', () => {
    expect(checkParentheses('--()--')).toBe(true)
    expect(checkParentheses('-a]--[')).toBe(false)
    expect(checkParentheses('dsa{vsfs{ad')).toBe(false)
    expect(checkParentheses('j78(g5b]uyg')).toBe(false)
    expect(checkParentheses(',m{i987y}hj')).toBe(true)
    expect(checkParentheses('dsa[3ed---:]::')).toBe(true)
  });
});
