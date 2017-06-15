import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Index extends React.Component {
   static navigationOptions = {
    title: 'Index',
  }

  render(){
    return(
      <View>
        <Text>Hello</Text>
        <Button
        title="click me to sign up"
        onPress={() => this.props.navigation.navigate('Signup')}
        />
      </View>
    )
  }

}
