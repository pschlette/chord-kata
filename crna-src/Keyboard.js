// @flow

import React from 'react';
import PianoKey, { WHITE_KEY_WIDTH, BLACK_KEY_WIDTH } from './PianoKey';
import { StyleSheet, View } from 'react-native';

type Props = {
  startStep: number,
  stepCount: number,
}

export default class Keyboard extends React.Component<Props> {
  render() {
    return (
      <View style={styles.keyboard}>
        <View style={{ position: 'absolute', left: 0 }}>
          <PianoKey />
        </View>
        <View style={{ position: 'absolute', left: WHITE_KEY_WIDTH }}>
          <PianoKey />
        </View>
        <View style={{ position: 'absolute', left: WHITE_KEY_WIDTH * 2 }}>
          <PianoKey isBlack />
        </View>
        <View style={{ position: 'absolute', left: WHITE_KEY_WIDTH * 3 }}>
          <PianoKey />
        </View>
        <View style={{ position: 'absolute', left: WHITE_KEY_WIDTH * 4 }}>
          <PianoKey isBlack />
        </View>
        <View style={{ position: 'absolute', left: WHITE_KEY_WIDTH * 5 }}>
          <PianoKey />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  keyboard: {
    flex: 1,
    flexDirection: 'row',
  },
});