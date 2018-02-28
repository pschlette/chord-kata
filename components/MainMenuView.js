// @flow

import * as React from 'react';
import { PRACTICE_VIEW_SCREEN_ID } from '../constants/screenIds';
import { StyleSheet, View, Button } from 'react-native';

type Props = {
    navigator: Object
};

export default class MainMenuView extends React.Component<Props> {
    handleStartButtonPress = () => {
        this.props.navigator.push({
            screen: PRACTICE_VIEW_SCREEN_ID,
            title: 'Practice',
            navigatorStyle: {
                navBarHidden: true,
            },
        });
    }

    render() {
        return (
            <View style={styles.mainMenuContainer}>
                <View style={styles.startButtonContainer}>
                    <Button
                        style={styles.startButton}
                        title="Start Practicing"
                        onPress={this.handleStartButtonPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainMenuContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    startButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    startButton: {
    },
});