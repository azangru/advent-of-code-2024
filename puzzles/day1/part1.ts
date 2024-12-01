import { parseInput } from './parseInput.ts';

export const solvePart1 = (input: string) => {
  const { list1, list2 } = parseInput(input);
  const sortedList1 = list1.toSorted();
  const sortedList2 = list2.toSorted();

  let totalDistance = 0;

  sortedList1.forEach((num1, index) => {
    const num2 = sortedList2[index];
    const distance = Math.abs(num1 - num2);
    totalDistance += distance;
  });

  return totalDistance;
};
