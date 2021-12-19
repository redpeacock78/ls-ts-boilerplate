// @ts-ignore
import { sum } from '../src/index';

describe('index', (): void => {
  describe('sum', (): void => {
    test.each([
      [1, 2, 3],
      [100, 20, 120],
      [10, 35, 45],
      [-1, 2, 1],
      [0, 10, 10],
    ])('calculate %i + %i', (a: number, b: number, expected: number): void => {
      expect(sum(a, b)).toBe(expected);
    });
  });
});
