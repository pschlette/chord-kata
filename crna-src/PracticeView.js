// @flow

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { isEqual as _isEqual } from 'lodash';

import { noteNameToNote, stepToNote } from './helpers/step-helpers';
import Keyboard from './Keyboard';

type Props = {};
type State = {
  selectedSteps: number[],
  targetChordNotes: number[],
  successCount: number,
  failCount: number,
};

export default class PracticeView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      selectedSteps: [],
      targetChordNotes: ['F', 'A', 'C'].map(noteNameToNote),
      successCount: 0,
      failCount: 0,
    };
  }

  handleSubmitPress = () => {
    const { successCount: currentSuccessCount, targetChordNotes } = this.state;
    const stepsAsNotes = this.state.selectedSteps.map(stepToNote);
    if (_isEqual(stepsAsNotes, targetChordNotes)) {
      this.setState({ successCount: currentSuccessCount + 1});
    }
    this.setState({ selectedSteps: [] });
  }

  handleSelectedStepsChange = (newSelectedSteps: number[]) => {
    this.setState({ selectedSteps: newSelectedSteps });
  }

  render() {
    const { successCount, failCount } = this.state;
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
            <Text>F Major</Text>
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
