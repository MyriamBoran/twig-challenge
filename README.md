# Twig challenge

## Task:

> Given an array of length >= 0, and a positive integer N, return the contents of the array divided into N equally sized arrays.
>
> Where the size of the original array cannot be divided equally by N, the final part should have a length equal to the remainder.

## Whats included:

- `groupArrayElements` function
- jest tests
- prettier config to format the code
- `package.json` and `package-lock.json` for dependency management

## Assumptions:

When grouping the input, if the final part would be an empty array we don't include it.

E.g. `[1, 2, 3, 4, 5, 6], 4)`

being equal to `[[1, 2], [3, 4], [5, 6]]`

instead of `[[1, 2], [3, 4], [5, 6], []]`

## How it works

- The number of elements to be included in one group (`arraySize`) will be `input length / N`, because this can be a fractional number we round it up using `Math.ceil`
- `slice` gives us a portion of the input from `start` to `end`, if we loop with the increment being `arraySize` we can calculate each group's `start` and `end` indices which we can then push into an array to return

## Install dependencies

`npm install`

## Run Tests

`npm test`
