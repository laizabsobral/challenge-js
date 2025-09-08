const detectDuplicates = require("./detectDuplicates");

describe("detectDuplicates function", () => {
  test("Should return duplicates in a single array", () => {
    const arr = [2, 5, 3, 2, 5, 7, 8, 3];
    const result = detectDuplicates(arr);
    console.log("Example 1 (duplicate numbers):", result);
    expect(result.sort()).toEqual([2, 3, 5]);
  });

  test("Should return empty array when there are no duplicates", () => {
    const arr = [1, 2, 3, 4];
    const result = detectDuplicates(arr);
    console.log("Example 2 (no duplicates):", result);
    expect(result).toEqual([]);
  });

  test("Must handle empty array", () => {
    const result = detectDuplicates([]);
    console.log("Example 3 (empty array):", result);
    expect(result).toEqual([]);
  });

  test("Must handle duplicate strings", () => {
    const arr = ["a", "b", "c", "a", "b"];
    const result = detectDuplicates(arr);
    console.log("Example 4 (duplicate strings):", result);
    expect(result.sort()).toEqual(["a", "b"]);
  });

  test("Must handle type mixing", () => {
    const arr = [1, "1", 1, true, true];
    const result = detectDuplicates(arr);
    console.log("Example 5 (mixed types):", result);
    expect(result.sort()).toEqual([1, true]);
  });
});
