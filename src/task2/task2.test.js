const inverse = require("./task2");

describe("inverse function", () => {
  it("should fails with empty value", () => {
    expect(() => {
      inverse();
    }).toThrow(`Argument must be an object, undefined given`);
  });

  it("should fails with null", () => {
    expect(() => {
      inverse(null);
    }).toThrow(`Argument shouldn't be a null`);
  });

  it("should fails with string ", () => {
    expect(() => {
      inverse("null");
    }).toThrow(`Argument must be an object, string given`);
  });

  it("should work with empty object ", () => {
    expect(inverse({})).toEqual({});
  });

  it("should work with non empty object ", () => {
    expect(inverse({ a: "some", b: "object", c: 1 })).toEqual({
      some: "a",
      object: "b",
      1: "c",
    });
  });

  it("should work with array ", () => {
    expect(inverse([1, 2, 3, 4])).toEqual({ 1: "0", 2: "1", 3: "2", 4: "3" });
  });

  it("should work with nested object ", () => {
    expect(
      inverse({
        a: { b: { c: "some" } },
      })
    ).toEqual({ "[object Object]": "a" });
  });
});
