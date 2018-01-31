// @flow

import * as React from 'react';
import _ from 'lodash';
import PianoKey, { WHITE_KEY_WIDTH, BLACK_KEY_WIDTH } from './PianoKey';
import { StyleSheet, View } from 'react-native';

type Props = {
  startStep: number,
  stepCount: number,
  selectedSteps: number[],
  onStepSelectionChange: (newSelectedSteps: number[]) => void,
}

type State = { };

export default class Keyboard extends React.Component<Props, State> {
  static isStepOnBlackKey = (step: number) => {
    const thisNote = step % 12;
    const blackNotes = [1, 3, 6, 8, 10];
    return _.includes(blackNotes, thisNote);
  }

  constructor(props: Props) {
    super(props);
  }

  // Toggle 'selected' status of the pressed key
  handleKeyPress = (step: number) => {
    const { selectedSteps } = this.props;
    const stepIndex = selectedSteps.indexOf(step);
    if (stepIndex >= 0) {
    // If the pressed step is already present in the list of selected steps, remove it
      const selectedStepsMinusThisStep = [
        ...selectedSteps.slice(0, stepIndex),
        ...selectedSteps.slice(stepIndex + 1, selectedSteps.length),
      ];
      this.props.onStepSelectionChange(selectedStepsMinusThisStep);
    } else {
      // Otherwise add it
      this.props.onStepSelectionChange([...selectedSteps, step]);
    }
  }

  render() {
    const { startStep, stepCount, selectedSteps } = this.props;
    const selectedStepsMap = _.fromPairs(selectedSteps.map(step => [step, true]));
    const steps = _.times(stepCount, i => startStep + i);

    // Generate piano key elements and track where to place the next key (the offset) for each step
    const { renderedKeys } = steps.reduce((
        { nextWhiteKeyOffset, renderedKeys }: { nextWhiteKeyOffset: number, renderedKeys: React.Node[] },
        thisStep: number
      ) => {
        const isBlack = Keyboard.isStepOnBlackKey(thisStep);
        const offset = isBlack
          ? nextWhiteKeyOffset - (BLACK_KEY_WIDTH / 2)
          : nextWhiteKeyOffset;

        const nextKey = (
          <View
            key={thisStep}
            style={{ position: 'absolute', left: offset, zIndex: isBlack ? 1 : 0 }}
          >
            <PianoKey
              black={isBlack}
              selected={selectedStepsMap[thisStep] || false}
              onPress={() => this.handleKeyPress(thisStep)}
            />
          </View>
        );

        const newNextWhiteKeyOffset = isBlack ? nextWhiteKeyOffset : nextWhiteKeyOffset + WHITE_KEY_WIDTH;

        return { nextWhiteKeyOffset: newNextWhiteKeyOffset, renderedKeys: [...renderedKeys, nextKey] };
    },
    { nextWhiteKeyOffset: 0, renderedKeys: [] }
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