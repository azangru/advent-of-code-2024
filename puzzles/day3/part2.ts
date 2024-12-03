export const solvePart2 = (input: string) => {
  const concatenatedInput = input.trim().split('\n').join('');
  const filteredInput = filterInput(concatenatedInput); // <-- pick from the input string only the parts between 'do()' and "don't()"
  const regex = /(mul\(\d+,\d+\))/g;

  const matches = [...filteredInput.matchAll(regex)]
    .map(match => match[0]);

  return matches.reduce((acc, match) => {
    return acc + runCommand(match);
  }, 0);
};


const filterInput = (input: string) => {
  let result = '';

  let dontCommand = "don't()";
  let doCommand = "do()";

  while (true) {
    // find the part of string between the do and the don't commands,
    // and append it to the growing result string
    const indexDont = input.indexOf(dontCommand);

    if (indexDont === -1) {
      break;
    }

    const start = 0;
    const end = indexDont;
    const slice = input.slice(start, end);
    result += slice;

    // cut away the slice that was just added
    input = input.slice(indexDont + dontCommand.length);

    // in the remainder of the input, ignore the part until the next 'do' command
    const indexDo = input.indexOf(doCommand);

    if (indexDo === -1) {
      break;
    }

    // cut away everything that preceded the 'do' command (and the 'do' command itself)
    input = input.slice(indexDo + doCommand.length);
  }

  return result;
};

const runCommand = (command: string) => {
  const regex = /mul\((?<first>\d+),(?<second>\d+)\)/;
  const { first, second } = regex.exec(command).groups;
  
  return parseInt(first) * parseInt(second);
};
