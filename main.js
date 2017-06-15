import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Index from './Components/index.js';
import Login from './Components/login.js';
import Dashboard from './Components/dashboard.js';
import Styles from './Components/Styles.js';


class App extends React.Component {
  render() {
    return (
     <Index />
    );
  }
}

const ModalStack = StackNavigator({
  Index: { screen: Index },
  Login: { screen: Login },
  Dashboard: { screen: Dashboard }
});




Expo.registerRootComponent(ModalStack);
