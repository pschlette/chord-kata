// @flow

import { Navigation } from 'react-native-navigation';
import MainMenuView from './components/MainMenuView';
import PracticeView from './components/PracticeView';

import * as ScreenIds from './constants/screenIds';

Navigation.registerComponent(ScreenIds.MAIN_MENU_VIEW_SCREEN_ID, () => MainMenuView);
Navigation.registerComponent(ScreenIds.PRACTICE_VIEW_SCREEN_ID, () => PracticeView);

Navigation.startSingleScreenApp({
  screen: {
    screen: ScreenIds.MAIN_MENU_VIEW_SCREEN_ID,
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