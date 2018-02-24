// @flow

import { Navigation } from 'react-native-navigation';
import PracticeView from './components/PracticeView';

const PRACTICE_VIEW_SCREEN_ID = 'chordkata.PracticeView';

Navigation.registerComponent(PRACTICE_VIEW_SCREEN_ID, () => PracticeView);

Navigation.startSingleScreenApp({
  screen: {
    screen: PRACTICE_VIEW_SCREEN_ID,
    title: 'Practice',
    navigatorStyle: {},
    navigatorButtons: {}
  },
});