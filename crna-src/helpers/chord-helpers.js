// @flow

import { stepToNote } from './step-helpers';

export type Chord = number[];

export function getMajorChordForNote(note: number): Chord {
  return [stepToNote(note), stepToNote(note + 4), stepToNote(note + 7)];
}