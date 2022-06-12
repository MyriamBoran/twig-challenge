import { groupArrayElements } from "./groupArrayElements";

describe("groupArrayElements", () => {
  test("without remainder", () => {
    const output = groupArrayElements([1, 2, 3, 4, 5, 6], 3);
    expect(output).toStrictEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("with remainder", () => {
    const output = groupArrayElements([1, 2, 3, 4, 5], 3);
    expect(output).toStrictEqual([[1, 2], [3, 4], [5]]);
  });

  test("with empty remainder", () => {
    const output = groupArrayElements([1, 2, 3, 4, 5, 6], 4);
    expect(output).toStrictEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });

  test("empty input", () => {
    const output = groupArrayElements([], 2);
    expect(output).toStrictEqual([]);
  });
});
