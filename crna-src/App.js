import React from 'react';
import { StyleSheet, View } from 'react-native';
import Keyboard from './Keyboard';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Keyboard
          startStep={0}
          stepCount={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#0aa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
