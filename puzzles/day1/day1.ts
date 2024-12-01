import path from 'node:path';
import fs from 'node:fs';

import { solvePart1 } from './part1.ts';
import { solvePart2 } from './part2.ts';

const pathToInput = path.resolve(import.meta.dirname, './input.txt');
const input = fs.readFileSync(pathToInput, { encoding: 'utf-8' });


console.log('solution to day1 part 1:', solvePart1(input));
console.log('solution to day1 part 2:', solvePart2(input));
