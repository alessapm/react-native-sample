import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Styles from './Styles.js';

export default class Signup extends React.Component {
   static navigationOptions = {
    title: 'Login',
  }
  constructor(){
    super();

    this.state = {
      emailEntry: '',
      passwordEntry: '',
      emailError: '',
      passwordError: ''
    };
  }

handleSubmit(){
  alert('submitted');
  console.log('submitted')
}


  render(){
    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>Login</Text>
        <View>
          <Text>{this.state.emailError}</Text>
          <TextInput
          style={Styles.textInput}
          placeholder="enter email address"
          />
          <Text>{this.state.passwordError}</Text>
          <TextInput
          style={Styles.textInput}
          placeholder="enter password"
          secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={this.handleSubmit.bind(this)}
          style={Styles.submit}
          >
          <Text style={{color: 'navy', textAlign: 'center'}}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }

}
