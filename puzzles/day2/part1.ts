import { parseInput } from './parseInput.ts';

export const solvePart1 = (input) => {
  const reports = parseInput(input);

  let result = 0;

  for (let report of reports) {
    if (isSafeReport(report)) {
      result++;
    }
  }

  return result;
};

const isSafeReport = (report: number[]) => {
  const [first, second] = report;
  if (second > first) {
    return isSafeIncreasing(report);
  } else if (second < first) {
    return isSafeDecreasing(report);
  } else {
    return false;
  }
};

const isSafeIncreasing = (report: number[]) => {
  for (let i = 0; i < report.length - 1; i++) {
    const first = report[i];
    const second = report[i + 1];
    if (second < first || !areSafeAdjacent(first, second)) {
      return false;
    }
  }
  return true;
};

const isSafeDecreasing = (report: number[]) => {
  for (let i = 0; i < report.length - 1; i++) {
    const first = report[i];
    const second = report[i + 1];
    if (second > first || !areSafeAdjacent(first, second)) {
      return false;
    }
  }
  return true;
};


// Any two adjacent levels differ by at least one and at most three.
const areSafeAdjacent = (num1: number, num2: number) => {
  const difference = Math.abs(num1 - num2);
  return difference >= 1 && difference <= 3;
};
