const query = 'MAS';

export const solvePart2 = (input: string) => {
  input = input.trim();
  const lines = input.split('\n');

  let total = 0;

  // Use a sliding 3*3 window to inspect the matrix
  for (let rowIndex = 0; rowIndex < lines.length - 2; rowIndex++) {
    for (let columnIndex = 0; columnIndex < lines[0].length - 2; columnIndex++) {
      const diagonal1 = `${
        lines[rowIndex][columnIndex]
      }${
        lines[rowIndex + 1][columnIndex + 1]
      }${
        lines[rowIndex + 2][columnIndex + 2]
      }`;
      const diagonal2 = `${
        lines[rowIndex + 2][columnIndex]
      }${
        lines[rowIndex + 1][columnIndex + 1]
      }${
        lines[rowIndex][columnIndex + 2]
      }`;

      if (isMatch(diagonal1) && isMatch(diagonal2)) {
        total += 1;
      }
    }
  }

  return total;
};

const isMatch = (str: string) => {
  return str === query || str.split('').reverse().join('') === query;
};
