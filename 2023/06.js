/**
 * NOTES
 */

/**
 * SETUP & HELPERS
 */

const TEST_INPUT = `
Time:      7  15   30
Distance:  9  40  200
`;

const REAL_INPUT = `
Time:        56     71     79     99
Distance:   334   1135   1350   2430
`;

// Get array of parsed lines.
const getParsedInputLines = input => {
  return input.split('\n').filter(n => n);
}

/**
 * PART ONE
 */

const getPartOneSolution = input => {
  let winningProduct = 1;

  const parsedLines = getParsedInputLines(input);
  const times = parsedLines[0].match(/\d+/g).map(v => parseInt(v));
  const distances = parsedLines[1].match(/\d+/g).map(v => parseInt(v));

  times.forEach((time, index) => {
    let winnerFound = false;
    let buttonTime = 1;

    const winningDistance = distances[index];

    while (!winnerFound) {
      if (buttonTime * (time - buttonTime) > winningDistance) {
        const winningOptionsCount = Math.floor(((time/2) - buttonTime) * 2 + 1);

        winningProduct *= winningOptionsCount

        winnerFound = true;
      }
      buttonTime++;
    }
  });

  return winningProduct;
};
console.log(getPartOneSolution(REAL_INPUT));

/**
 * PART TWO
 */

const getPartTwoSolution = input => {
  let winningProduct = 1;

  const parsedLines = getParsedInputLines(input);
  const time = parseInt(parsedLines[0].match(/\d+/g).join(''));
  const distance = parseInt(parsedLines[1].match(/\d+/g).join(''));

  let buttonTime = 1;

  const winningDistance = distance;
  let winnerFound = false;

  while (!winnerFound) {
    if (buttonTime * (time - buttonTime) > winningDistance) {
      const winningOptionsCount = Math.floor(((time/2) - buttonTime) * 2 + 1);

      winningProduct *= winningOptionsCount

      winnerFound = true;
    }
    buttonTime++;
  }

  return winningProduct;
};
console.log(getPartTwoSolution(REAL_INPUT));