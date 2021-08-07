const groupBy = require("./task1");

describe("groupBy function", () => {
  it("should fails for first argument", () => {
    expect(() => {
      groupBy();
    }).toThrow("First argument must be an array, undefined given");
  });

  it("should fails for second argument", () => {
    expect(() => {
      groupBy([]);
    }).toThrow("Second argument must be a function, undefined given");
  });

  it("should work with empty array", () => {
    expect(groupBy([], Math.floor)).toEqual({});
  });

  it("should work correctly with user defined functions ", () => {
    expect(
      groupBy([9, 17, 11, 55, 60, 111, 1000, 1024], (val) => val % 10)
    ).toEqual({
      0: [60, 1000],
      1: [11, 111],
      4: [1024],
      5: [55],
      7: [17],
      9: [9],
    });
  });

  it("should work with correctly 'Math.ceil'", () => {
    expect(groupBy([3.6, 3.7, 6.4, 8.9], Math.ceil)).toEqual({
      4: [3.6, 3.7],
      7: [6.4],
      9: [8.9],
    });
  });

  it("should work correctly with 'Math.floor'", () => {
    expect(groupBy([3.6, 3.7, 6.4, 8.9], Math.floor)).toEqual({
      3: [3.6, 3.7],
      6: [6.4],
      8: [8.9],
    });
  });
});
