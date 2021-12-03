import {readFileSync} from 'fs';

export function readInput(path: string): string[] {
  return readFileSync(path, 'utf-8')
    .split(/\n/)
    .map(s => s.trim());
}

export function mostCommonBit(bins: string[], col: number): '0' | '1' {
  const counts = countBits(bins, col);
  return counts['0'] > counts['1'] ? '0' : '1';
}

function countBits(bins: string[], col: number): {'0': number; '1': number} {
  return bins
    .map(b => b[col] as '0' | '1')
    .reduce((acc, cur: '0' | '1') => ({...acc, [cur]: acc[cur] + 1}), {
      '0': 0,
      '1': 0,
    });
}

export function gammaBits(bins: string[]): string {
  const len = bins[0].length;
  return [...range(len)].map(i => mostCommonBit(bins, i)).join('');
}

export function epsilonBits(gamma: string): string {
  return gamma
    .split('')
    .map(c => (c === '0' ? '1' : '0'))
    .join('');
}
export function part1(bins: string[]): {gamma: number; epsilon: number} {
  const str = gammaBits(bins);
  return {
    gamma: parseInt(str, 2),
    epsilon: parseInt(epsilonBits(str), 2),
  };
}

export function part2(bins: string[]): {o2gen: number; co2scrub: number} {
  const o2str = o2gen(bins, 0);
  const co2str = co2scrub(bins, 0);

  return {
    o2gen: parseInt(o2str, 2),
    co2scrub: parseInt(co2str, 2),
  };

  function o2gen(bins: string[], col: number): string {
    if (bins.length === 1) return bins[0];
    const counts = countBits(bins, col);
    const filtered =
      counts['1'] >= counts['0']
        ? bins.filter(b => b[col] === '1')
        : bins.filter(b => b[col] === '0');
    return o2gen(filtered, col + 1);
  }

  function co2scrub(bins: string[], col: number): string {
    if (bins.length === 1) return bins[0];
    const counts = countBits(bins, col);
    const filtered =
      counts['0'] <= counts['1']
        ? bins.filter(b => b[col] === '0')
        : bins.filter(b => b[col] === '1');
    return co2scrub(filtered, col + 1);
  }
}

function* range(endEx: number): Generator<number, void, void> {
  let i = 0;
  while (i < endEx) {
    yield i++;
  }
}
