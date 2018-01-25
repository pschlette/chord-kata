// @flow

export type Chord = number[];

export function getMajorChordForNote(note: number): Chord {
  return [note, note + 4, note + 7];
}