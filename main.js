import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Index from './Components/index.js';
import Signup from './Components/signup.js';
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
  Signup: { screen: Signup },
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  activeTitle: {
    color: 'red',
  },
});


Expo.registerRootComponent(ModalStack);
