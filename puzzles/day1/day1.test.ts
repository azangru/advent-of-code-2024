import { test, describe,  } from 'node:test';
import assert from 'node:assert';

import { solvePart1 } from './part1.ts';
import { solvePart2 } from './part2.ts';

const sampleInput = `
3   4
4   3
2   5
1   3
3   9
3   3
`;


test('solvePart1', () => {
  assert.strictEqual(solvePart1(sampleInput), 11);
});

test('solvePart2', () => {
  assert.strictEqual(solvePart2(sampleInput), 31);
});
