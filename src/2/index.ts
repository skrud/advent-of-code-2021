import {readFileSync} from 'fs';

type Direction = 'up' | 'down' | 'forward';
type Command = {direction: Direction; magnitude: number};
type Position = {depth: number; pos: number};
type AimPosition = Position & {aim: number};

function isDirection(s: string): asserts s is Direction {
  if (s === 'up' || s === 'down' || s === 'forward') {
    return;
  }
  throw new Error('Invalid direction: ' + s);
}

function parseCommand(cmd: string): Command {
  const [dir, mag] = cmd.trim().split(/\s+/);
  isDirection(dir);
  return {
    direction: dir,
    magnitude: Number(mag),
  };
}

export function readInput(path: string): Command[] {
  return readFileSync(path, 'utf-8').split('\n').map(parseCommand);
}

export function processCommands(cmds: Command[]): Position {
  return cmds.reduce(
    (acc, cur) => {
      switch (cur.direction) {
        case 'down':
          return {...acc, depth: acc.depth + cur.magnitude};
        case 'up':
          return {...acc, depth: acc.depth - cur.magnitude};
        case 'forward':
          return {
            ...acc,
            pos: acc.pos + cur.magnitude,
          };
      }
    },
    {depth: 0, pos: 0}
  );
}

export function processCommandsWithAim(cmds: Command[]): AimPosition {
  return cmds.reduce(
    (acc, cur) => {
      switch (cur.direction) {
        case 'down':
          return {...acc, aim: acc.aim + cur.magnitude};
        case 'up':
          return {...acc, aim: acc.aim - cur.magnitude};
        case 'forward':
          return {
            ...acc,
            pos: acc.pos + cur.magnitude,
            depth: acc.depth + acc.aim * cur.magnitude,
          };
      }
    },
    {depth: 0, pos: 0, aim: 0}
  );
}
