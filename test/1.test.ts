import {expect} from 'chai';
import {readFileSync} from 'fs';
import {
  numberOfTimesIncreasing,
  slidingWindow,
  slidingWindowIncreasing,
} from '../src/1';

describe('test', () => {
  describe('Day 1 on Inputs', () => {
    const inputs = readFileSync('inputs/1/input.txt', 'utf-8')
      .split('\n')
      .map(n => Number(n.trim()));

    it('Day 1 Part 1', () => {
      console.log(numberOfTimesIncreasing(inputs));
    });

    it('Day 1 Part 2', () => {
      console.log(slidingWindowIncreasing(inputs, 3));
    });
  });

  describe('increasing count', () => {
    it('should count', () => {
      const sample = [1, 2, 3, 1, 1];
      expect(numberOfTimesIncreasing(sample)).equals(2);
    });
    it('should be 0', () => {
      const sample = [5, 4, 3, 2, 1, 0];
      expect(numberOfTimesIncreasing(sample)).equals(0);
    });
  });
  describe('slidingWindow', () => {
    it('should be an array of single-item arrays with a sliding window of 1', () => {
      const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect([...slidingWindow(sample, 1)]).eql(sample.map(i => [i]));
    });
    it('should give us a slide', () => {
      const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      expect([...slidingWindow(sample, 3)]).eql([
        [1, 2, 3],
        [2, 3, 4],
        [3, 4, 5],
        [4, 5, 6],
        [5, 6, 7],
        [6, 7, 8],
        [7, 8, 9],
      ]);
    });
  });
});
