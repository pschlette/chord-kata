// @flow

import React from 'react';
import _ from 'lodash';
import PianoKey, { WHITE_KEY_WIDTH, BLACK_KEY_WIDTH } from './PianoKey';
import { StyleSheet, View } from 'react-native';

type Props = {
  startStep: number,
  stepCount: number,
}

export default class Keyboard extends React.Component<Props> {
  static isStepOnBlackKey = (step: number) => {
    const thisNote = step % 12;
    const blackNotes = [1, 3, 6, 8, 10];
    return _.includes(blackNotes, thisNote);
  }

  render() {
    const { startStep, stepCount } = this.props;
    const steps = _.times(stepCount, i => startStep + i);

    const { renderedKeys } = steps.reduce(({ nextWhiteKeyOffset, renderedKeys }: { nextWhiteKeyOffset: number, renderedKeys: [] }, thisStep) => {
      const isBlack = Keyboard.isStepOnBlackKey(thisStep);
      const offset = isBlack
        ? nextWhiteKeyOffset - (BLACK_KEY_WIDTH / 2)
        : nextWhiteKeyOffset;

      const nextKey = (
        <View style={{ position: 'absolute', left: offset, zIndex: isBlack ? 1 : 0 }}>
          <PianoKey
            key={thisStep}
            isBlack={isBlack}
          />
        </View>
      );

      const newNextWhiteKeyOffset = isBlack ? nextWhiteKeyOffset : nextWhiteKeyOffset + WHITE_KEY_WIDTH;

      return { nextWhiteKeyOffset: newNextWhiteKeyOffset, renderedKeys: [...renderedKeys, nextKey] };
    }, { nextWhiteKeyOffset: 0, renderedKeys: [] }
  );

    return (
      <View style={styles.keyboard}>
        { renderedKeys }
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