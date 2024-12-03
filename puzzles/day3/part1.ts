export const solvePart1 = (input: string) => {
  const concatenatedInput = input.trim().split('\n').join('');
  const regex = /(mul\(\d+,\d+\))/g;

  const matches = [...concatenatedInput.matchAll(regex)]
    .map(match => match[0]);

  return matches.reduce((acc, match) => {
    return acc + runCommand(match);
  }, 0);
};

const runCommand = (command: string) => {
  const regex = /mul\((?<first>\d+),(?<second>\d+)\)/;
  const { first, second } = regex.exec(command).groups;
  
  return parseInt(first) * parseInt(second);
};
