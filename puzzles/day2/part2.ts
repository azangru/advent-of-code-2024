import { parseInput } from './parseInput.ts';

export const solvePart2 = (input) => {
  const reports = parseInput(input);

  let safeReportsCount = 0;

  for (let report of reports) {
    if (isSafeReport(report)) {
      safeReportsCount++;
    }
  }

  return safeReportsCount;
};

const isSafeReport = (report: number[], canCheckSubreport: boolean = true) => {
  const [first, second] = report;
  const isIncreasing = second > first;

  for (let i = 0; i < report.length - 1; i++) {
    const first = report[i];
    const second = report[i + 1];

    const isCorrectSequence = isIncreasing
      ? second > first
      : second < first;

    if (!isCorrectSequence || !areSafeAdjacent(first, second)) {
      if (canCheckSubreport) {
        return checkSubreports(report)
      } else {
        return false;
      }
    }
  }

  return true;
};

// Any two adjacent levels differ by at least one and at most three.
const areSafeAdjacent = (num1: number, num2: number) => {
  const difference = Math.abs(num1 - num2);
  return difference >= 1 && difference <= 3;
};

const checkSubreports = (report: number[]) => {
  for (let i = 0; i < report.length; i++) {
    const left = report.slice(0, i);
    const right = report.slice(i + 1, report.length);
    const subreport = left.concat(right);
    if (isSafeReport(subreport, false)) {
      return true;
    }
  }
  return false;
};
