import { sum } from "../sum";

test('Sum func. should calculate the sum of two numbers ', () => {
  // if empty test case then it will always pass
    const result = sum(3, 4);

  //Known as Assertion , If it will not present then it will always pass
  expect(result).toBe(7);
});
