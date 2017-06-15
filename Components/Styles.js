import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'tomato',
    textAlign: 'center'
  },
  activeTitle: {
    color: 'pink',
  },
});


