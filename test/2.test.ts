import {readInput, processCommands, processCommandsWithAim} from '../src/2';

describe('Submarine move', () => {
  const cmds = readInput('inputs/2/input.txt');

  describe('Part 1', () => {
    it('Follow instructions', () => {
      const res = processCommands(cmds);
      const mul = res.depth * res.pos;
      console.log(mul);
    });
  });
  describe('Part 2', () => {
    it('Uses aim', () => {
      const res = processCommandsWithAim(cmds);
      const mul = res.depth * res.pos;
      console.log(mul);
    });
  });
});
