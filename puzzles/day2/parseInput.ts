export const parseInput = (input: string) => {
  return input.trim().split('\n')
    .map(line => {
      const numberStrings = line.trim().split(/\s+/);
      return numberStrings.map(str => parseInt(str, 10));
    });
};
