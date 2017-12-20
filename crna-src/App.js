// @flow

import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import Keyboard from './Keyboard';

type Props = {};
type State = {
  selectedSteps: number[],
};

export default class App extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      selectedSteps: [],
    };
  }

  handleSubmitPress = () => {
    this.setState({ selectedSteps: [] });
  }

  handleSelectedStepsChange = (newSelectedSteps: number[]) => {
    this.setState({ selectedSteps: newSelectedSteps });
  }

  render() {
    return (
      <View style={styles.container}>
        <Keyboard
          startStep={0}
          stepCount={20}
          selectedSteps={this.state.selectedSteps}
          onStepSelectionChange={this.handleSelectedStepsChange}
        />
        <View style={styles.infoContainer}>
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
