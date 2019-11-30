import React from 'react';
import {createAppContainer} from 'react-navigation';
import RootStack from './src/components/ui/AppRouter';

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
