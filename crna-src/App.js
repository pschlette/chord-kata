// @flow

import React from 'react';
import PracticeView from './components/PracticeView';

type Props = {};
type State = {};

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { };
  }

  render() {
    return <PracticeView />;
  }
}
