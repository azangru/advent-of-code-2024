import { parseInput } from "./parseInput.ts";
import { isValidPrintRun } from './part1.ts';

export const solvePart2 = (input: string) => {
  const { pageOrderRules, printRuns } = parseInput(input);

  const invalidPrintRuns: number[][] = [];

  for (const printRun of printRuns) {
    if (!isValidPrintRun(printRun, pageOrderRules)) {
      invalidPrintRuns.push(printRun);
    }
  }

  const fixedPrintRuns = invalidPrintRuns.map(printRun => fixPrintRun(printRun, pageOrderRules));

  return fixedPrintRuns.reduce((acc, printRun) => {
    const middlePageNumberIndex = Math.floor(printRun.length / 2);
    const middlePageNumber = printRun[middlePageNumberIndex];

    return acc + middlePageNumber;
  }, 0);
};

const fixPrintRun = (printRun: number[], rules: Map<number, Set<number>>) => {
  return printRun.toSorted((page1, page2) => {
    const pagesAfterPage1 = rules.get(page1);
    const pagesAfterPage2 = rules.get(page2);

    if (pagesAfterPage1 && pagesAfterPage1.has(page2)) {
      return -1;
    } else if (pagesAfterPage2 && pagesAfterPage2.has(page1)) {
      return 1;
    }

    return -1;
  });
};
