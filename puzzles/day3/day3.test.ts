import { test } from 'node:test';
import assert from 'node:assert';

import { solvePart1 } from './part1.ts';
import { solvePart2 } from './part2.ts';

const testInput = `
xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))
`;

const testInput2 = `
xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))
`;

test('Solution for part 1', () => {
  assert.deepEqual(solvePart1(testInput), 161);
});

test('Solution for part 2', () => {
  assert.deepEqual(solvePart2(testInput2), 48);
});
