// @flow

import { Navigation } from 'react-native-navigation';
import MainMenuView from './components/MainMenuView';
import PracticeView from './components/PracticeView';

const MAIN_MENU_VIEW_SCREEN_ID = 'chordkata.MainMenuView';
const PRACTICE_VIEW_SCREEN_ID = 'chordkata.PracticeView';

Navigation.registerComponent(MAIN_MENU_VIEW_SCREEN_ID, () => MainMenuView);
Navigation.registerComponent(PRACTICE_VIEW_SCREEN_ID, () => PracticeView);

Navigation.startSingleScreenApp({
  screen: {
    screen: MAIN_MENU_VIEW_SCREEN_ID,
    title: 'Main Menu',
    navigatorStyle: {
      navBarHidden: true,
    },
    navigatorButtons: {},
  },
  appStyle: {
    orientation: 'landscape',
  },
});