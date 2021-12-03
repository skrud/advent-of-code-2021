import {part1, part2, readInput} from '../src/3';

describe('Day 3', () => {
  const bins = readInput('inputs/3/input.txt');
  it('Part 1', () => {
    const {gamma, epsilon} = part1(bins);
    const mul = gamma * epsilon;
    console.log(mul);
  });
  it('Part 2', () => {
    const {o2gen, co2scrub} = part2(bins);
    const mul = o2gen * co2scrub;
    console.log(mul);
  });
});
