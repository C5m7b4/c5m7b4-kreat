import { sum } from "../src/Math";

describe("sum", () => {
  test("should add two numbers", () => {
    expect(sum(4, 5)).toEqual(9);
  });
});
