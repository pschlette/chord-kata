// @flow 

import React from 'react';
import { StyleSheet, View, TouchableNativeFeedback } from 'react-native';

type Props = {
  black: boolean,
  selected: boolean,
  onPress: () => void
};

export const WHITE_KEY_WIDTH = 60;
export const BLACK_KEY_WIDTH = 30;

export default class PianoKey extends React.Component<Props> {
  render() {
    const { black, selected, onPress } = this.props;

    return (
      <TouchableNativeFeedback
        onPress={onPress}
      >
        <View style={black ? styles.blackPianoKey : styles.whitePianoKey}>
          { selected ? <View style={styles.selectionIndicator} /> : null }
        </View>
      </TouchableNativeFeedback>
    );
  }
}


const styles = (() => {
  const pianoKey = {
    borderWidth: 1,
    borderColor: '#888',
  };

  const whitePianoKey = {
      ...pianoKey,
      backgroundColor: '#ddd',
      width: WHITE_KEY_WIDTH,
      height: 200,
    };

  const blackPianoKey = {
    ...pianoKey,
    backgroundColor: '#222',
    width: BLACK_KEY_WIDTH,
    height: 125,
  };

  return StyleSheet.create({
    whitePianoKey,
    blackPianoKey,
    selectionIndicator: {
      backgroundColor: '#c00',
      height: 25,
    },
  });
})();