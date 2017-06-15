import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from './Styles.js';


export default class Index extends React.Component {
   static navigationOptions = {
    title: 'Index',
  }

  render(){
    return(
      <View>
        <Text style={Styles.title}>Hello</Text>
        <Button
        title="click me to sign up"
        onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    )
  }

}
