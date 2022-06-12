export const groupArrayElements = (input: number[], n: number) => {
  // Example input: ([1, 2, 3, 4, 5], 3)
  // Example output: [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]

  const output = [];
  const arraySize = Math.ceil(input.length / n);

  for (let i = 0; i < input.length; i += arraySize) {
    output.push(input.slice(i, i + arraySize));
  }

  return output;
};
