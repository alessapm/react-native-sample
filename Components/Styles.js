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
    alignItems: 'center',
    flex: 1
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'tomato',
    textAlign: 'center'
  },
  textInput: {
    height: 50,
    borderColor: 'navy',
    borderWidth: 2,
    width: 300,
    padding: 5
  },
  warning: {
    color: 'maroon',
    fontWeight: 'bold'
  },
  submit: {
    height: 50,
    width: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'navy',
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    marginTop: 10
  },
  section: {
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'navy',
    borderWidth: 2,
    marginTop: 1,
    marginBottom: 1
  },
  textInside: {
    color: 'white',
    textAlign: 'center'
  },
  mainContainer: {
    flex: 1,
    padding: 10
  }
});


