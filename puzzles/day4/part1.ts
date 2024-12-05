const query = 'XMAS';
const queryRegex = new RegExp(query, 'g');

export const solvePart1 = (input: string) => {
  input = input.trim();
  const lines = input.split('\n');

  return countWordHorizontally(lines)
    + countWordVertically(lines)
    + countWordDiagonally(lines);
};

const countWordHorizontally = (lines: string[]) => {
  let total = 0;

  for (const line of lines) {
    total += countWordInString(line);
  }

  return total;
};

const countWordVertically = (lines: string[]) => {
  let total = 0;

  for (let columIndex = 0; columIndex < lines[0].length; columIndex++) {
    let line = '';
    for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
      line += lines[rowIndex][columIndex];
    }
    total += countWordInString(line);
  }

  return total;
};

const countWordDiagonally = (lines: string[]) => {
  let total = 0;

  // Primary diagonal (right end above left end) left half
  for (let rowIndex = 0, columnIndex = 0; rowIndex < lines.length; rowIndex++, columnIndex++) {
    let line = '';

    for (let i = 0; i <= rowIndex; i++) {
      const row = rowIndex - i;
      const column = i;
      const char = lines[row]?.[column];
      if (char) {
        line += char;
      }
    }

    total += countWordInString(line);
  }

  // Primary diagonal (right end above left end), right half
  for (let columnIndex = 1; columnIndex < lines[0].length; columnIndex++) {
    let line = '';
    const rowIndex = lines.length - 1

    for (let i = 0; i < lines[0].length - columnIndex; i++) {
      const column = columnIndex + i;
      const row = rowIndex - i;
      const char = lines[row]?.[column];

      if (char) {
        line += char;
      }
    }

    total += countWordInString(line);
  }

  // Secondary diagonal (left end above right end) left half
  for (let rowIndex = 0; rowIndex < lines.length; rowIndex++) {
    let line = '';
    let columIndex = 0;

    for (let i = 0; i < lines.length - rowIndex; i++) {
      const row = rowIndex + i;
      const column = columIndex + i;
      const char = lines[row]?.[column];

      if (char) {
        line += char;
      }
    }

    total += countWordInString(line);
  }

  // Secondary diagonal (left end above right end) right half
  for (let columnIndex = 1; columnIndex < lines[0].length; columnIndex++) {
    let line = '';
    let rowIndex = 0;

    for (let i = 0; i <= lines[0].length - columnIndex; i++) {
      const row = rowIndex + i;
      const column = columnIndex + i;
      const char = lines[row]?.[column];

      if (char) {
        line += char;
      }
    }
    
    total += countWordInString(line);
  }

  return total;
};


const countWordInString = (str: string) => {
  let count = 0;
  count += [...str.matchAll(queryRegex)].length;
  const reverseStr = str.split('').reverse().join('');
  count += [...reverseStr.matchAll(queryRegex)].length;
  return count;
};
