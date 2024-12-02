import { test } from 'node:test';
import assert from 'node:assert';

import { solvePart1 } from './part1.ts';
import { solvePart2 } from './part2.ts';

const testInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

test('solution for part 1', () => {
  assert.strictEqual(solvePart1(testInput), 2);
});

test('solution for part 2', () => {
  // console.log(solvePart2(testInput));
  assert.strictEqual(solvePart2(testInput), 4);
});
