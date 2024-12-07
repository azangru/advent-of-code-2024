export type PasedInput = ReturnType<typeof parseInput>;

export const parseInput = (input: string) => {
  input = input.trim();

  let [orderRulesString, pagesToProduceString] = input.split('\n\n');

  const pageOrderRules = buildOrderRulesMap(orderRulesString);
  const printRuns = parsePrintRuns(pagesToProduceString);

  return {
    pageOrderRules,
    printRuns
  };
};

const buildOrderRulesMap = (orderRules: string) => {
  const lines = orderRules.split('\n');
  const stringPairs = lines.map(line => line.split('|') as [string, string]);
  const numberPairs = stringPairs.map(([first, second]) => [parseInt(first), parseInt(second)] as [number, number]);

  const orderRulesMap = new Map<number, Set<number>>();

  for (const [first, second] of numberPairs) {
    const savedNumbers = orderRulesMap.get(first);
    if (savedNumbers) {
      savedNumbers.add(second);
    } else {
      const savedNumbers = new Set([second]);
      orderRulesMap.set(first, savedNumbers);
    }
  }

  return orderRulesMap;
};

const parsePrintRuns = (input: string) => {
  return input.split('\n')
    .map(line => line.split(',').map(str => parseInt(str, 10)))
};
