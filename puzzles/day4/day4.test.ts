import { test, describe } from 'node:test';
import assert from 'node:assert';

import { solvePart1 } from './part1.ts';
import { solvePart2 } from './part2.ts';

// Calibration input for checking diagonals (with console.log)
const calibrationInput = `
123456
789012
345678
901234
567890
123456
`;

const testInput = `
MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX
`;

test('Solution for part 1', () => {
  assert.strictEqual(solvePart1(testInput), 18)
});


test('Solution for part 2', () => {
  assert.strictEqual(solvePart2(testInput), 9)
});
