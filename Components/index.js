import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from './Styles.js';


export default class Index extends React.Component {
   static navigationOptions = {
    title: 'Home',
  }

  render(){
    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>Welcome</Text>
        <Button
        title="click here to log in"
        onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }

}
