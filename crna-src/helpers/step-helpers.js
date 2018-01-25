// @flow

import { groupBy as _groupBy, times as _times } from 'lodash';

const noteNamesToNotes = {
  "C": 0,
  "C#": 1,
  "Db": 1,
  "D": 2,
  "D#": 3,
  "Eb": 3,
  "E": 4,
  "F": 5,
  "F#": 6,
  "Gb": 6,
  "G": 7,
  "G#": 8,
  "Ab": 8,
  "A": 9,
  "A#": 10,
  "Bb": 10,
  "B": 11,
};

const noteNames: NoteName[] = Object.keys(noteNamesToNotes);

const notesToNoteNames: { [number]: NoteName[] } = _groupBy(noteNames, (noteName: NoteName) => noteNamesToNotes[noteName]);

type NoteName = $Keys<typeof noteNamesToNotes>;

export const getAllNotes = (): number[] => _times(12, i => i);

export const noteNameToNote = (noteName: NoteName): number => {
  return noteNamesToNotes[noteName];
};

export const getNoteNamesForNote = (note: number): NoteName[] => {
  return notesToNoteNames[note] || [];
}

export const stepToNote = (step: number): number => {
  return step % 12;
};