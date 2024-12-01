import { parseInput } from './parseInput.ts';

export const solvePart2 = (input: string) => {
  const { list1, list2 } = parseInput(input);
  
  const list2Counts = getListMemberCounts(list2);

  return list1.reduce((acc, number): number => {
    const timesSeenInList2 = list2Counts.get(number) ?? 0;
    const scoreForNumber = number * timesSeenInList2;

    return acc + scoreForNumber;
  }, 0)
};


const getListMemberCounts = (list: number[]) => {
  const map = new Map<number, number>();

  for (const number of list) {
    const seenCount = map.get(number);
    if (!seenCount) {
      map.set(number, 1);
    } else {
      map.set(number, seenCount + 1);
    }
  }

  return map;
};
