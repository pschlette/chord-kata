// @flow 

import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
  isBlack: bool,
  selected: bool,
  onSelect: () => void
};

export const WHITE_KEY_WIDTH = 60;
export const BLACK_KEY_WIDTH = 30;

export default class PianoKey extends React.Component<Props> {
  render() {
    const { isBlack } = this.props;

    return (
      <View style={isBlack ? styles.blackPianoKey : styles.whitePianoKey} />
    );
  }
}

const pianoKeyStyle = {
  borderWidth: 1,
  borderColor: '#888',
};

const styles = StyleSheet.create({
  whitePianoKey: {
    ...pianoKeyStyle,
    backgroundColor: '#ddd',
    width: WHITE_KEY_WIDTH,
    height: 200,
  },
  blackPianoKey: {
    backgroundColor: '#222',
    width: BLACK_KEY_WIDTH,
    height: 125,
  },
});