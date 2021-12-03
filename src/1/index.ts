export function numberOfTimesIncreasing(nums: number[]): number {
  return nums.reduce(
    (acc, cur, i, arr) => (i > 0 && cur > arr[i - 1] ? acc + 1 : acc),
    0
  );
}

export function slidingWindowIncreasing(
  nums: number[],
  windowSize: number
): number {
  return numberOfTimesIncreasing(
    [...slidingWindow(nums, windowSize)].map(arr =>
      arr.reduce((acc, cur) => acc + cur)
    )
  );
}

export function* slidingWindow<T>(
  arr: T[],
  windowSize: number
): Generator<T[], void, void> {
  let i = 0;
  while (i + windowSize <= arr.length) {
    yield arr.slice(i, i + windowSize);
    i++;
  }
}
