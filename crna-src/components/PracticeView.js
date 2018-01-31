// @flow

import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { isEqual as _isEqual, sample as _sample } from 'lodash';

import * as StepHelpers from '../helpers/step-helpers';
import * as ChordHelpers from '../helpers/chord-helpers';
import type { Chord } from '../helpers/chord-helpers';
import Keyboard from './Keyboard';

type Props = {};
type State = {
  selectedSteps: number[],
  targetChordName: string,
  targetChordNotes: number[],
  successCount: number,
  failCount: number,
};

export default class PracticeView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const { name, notes } = PracticeView.generateTargetChord();

    this.state = {
      selectedSteps: [],
      targetChordName: name,
      targetChordNotes: notes,
      successCount: 0,
      failCount: 0,
    };
  }

  static generateTargetChord = (): { name: string, notes: Chord } => {
    const rootNote = _sample(StepHelpers.getAllNotes());
    return {
      name: `${StepHelpers.getNoteNamesForStep(rootNote)[0]} Major`,
      notes: ChordHelpers.getMajorChordForNote(rootNote),
    };
  }

  handleSubmitPress = () => {
    const { successCount: currentSuccessCount, failCount: currentFailCount, targetChordNotes } = this.state;
    const stepsAsNotes: Chord = this.state.selectedSteps.map(StepHelpers.stepToNote);
    if (_isEqual(stepsAsNotes, targetChordNotes)) {
      this.setState({ successCount: currentSuccessCount + 1 });
    } else {
      this.setState({ failCount: currentFailCount + 1 });
    }

    // Clear the selected steps and provide a new chord for the user to enter
    const { name, notes } = PracticeView.generateTargetChord();
    this.setState({
      selectedSteps: [],
      targetChordName: name,
      targetChordNotes: notes,
    });
  }

  handleSelectedStepsChange = (newSelectedSteps: number[]) => {
    this.setState({ selectedSteps: newSelectedSteps });
  }

  render() {
    const { successCount, failCount, targetChordName } = this.state;
    return (
      <View style={styles.container}>
        <Keyboard
          startStep={0}
          stepCount={20}
          selectedSteps={this.state.selectedSteps}
          onStepSelectionChange={this.handleSelectedStepsChange}
        />
        <View style={styles.infoContainer}>
          <View>
            <Text>Results: { successCount }/{ successCount + failCount }</Text>
          </View>
          <View style={styles.targetChord}>
            <Text>{targetChordName}</Text>
          </View>
          <View style={styles.submitButtonContainer}>
            <Button
              title="Submit"
              onPress={this.handleSubmitPress}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0aa',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  targetChord: {
  },
  submitButtonContainer: {
  },
});
