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
                <Button
                    title="Start Practicing"
                    onPress={this.handleStartButtonPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainMenuContainer: {
    },
    startButton: {
    },
});