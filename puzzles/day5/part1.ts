import { parseInput } from "./parseInput.ts";

export const solvePart1 = (input: string) => {
  const { pageOrderRules, printRuns } = parseInput(input);

  const validPrintRuns: number[][] = [];

  for (const printRun of printRuns) {
    if (isValidPrintRun(printRun, pageOrderRules)) {
      validPrintRuns.push(printRun);
    }
  }

  return validPrintRuns.reduce((acc, printRun) => {
    const middlePageNumberIndex = Math.floor(printRun.length / 2);
    const middlePageNumber = printRun[middlePageNumberIndex];

    return acc + middlePageNumber;
  }, 0);
};

export const isValidPrintRun = (printRun: number[], rules: Map<number, Set<number>>) => {
  for (let i = 0; i < printRun.length; i++) {
    const page = printRun[i];
    const pagesToFollow = rules.get(page);
    if (!pagesToFollow) {
      continue;
    }
    const prevPages = printRun.slice(0, i);

    for (const prevPage of prevPages) {
      if (pagesToFollow.has(prevPage)) {
        return false;
      }
    }
  }

  return true;
};
