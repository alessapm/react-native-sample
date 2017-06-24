import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from './Styles.js';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    title: 'Dashboard',
  }

  render(){
    return(
      <View style={Styles.mainContainer}>

        <TouchableOpacity style={Styles.section}>
          <Text style={Styles.textInside}>Hello</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Styles.section}>
          <Text style={Styles.textInside}>Hello</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TouchableOpacity style={Styles.section}>
            <Text style={Styles.textInside}>Hello</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.section}>
            <Text style={Styles.textInside}>Hello</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={Styles.section}>
          <Text style={Styles.textInside}>Hello</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
