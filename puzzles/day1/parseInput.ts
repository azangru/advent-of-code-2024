export const parseInput = (input: string) => {
  input = input.trim();

  const list1: number[] = [];
  const list2: number[] = [];

  for (let line of input.split('\n')) {
    line = line.trim();
    const [num1, num2] = line.split(/\s+/).map(str => parseInt(str, 10));
    list1.push(num1);
    list2.push(num2);
  }

  return {
    list1,
    list2
  };
};
