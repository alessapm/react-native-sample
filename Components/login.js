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

validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

handleEmail(){
  if (!this.state.emailEntry){
    this.setState({emailError: 'Email cannot be blank. Please enter a valid email address'})
  } else if (!this.validateEmail(this.state.emailEntry)){
    this.setState({emailError: 'Email is invalid. Please enter a valid email'})
  }
}

handlePassword(){
  if (!this.state.passwordEntry){
    this.setState({passwordError: 'Password cannot be blank. Please enter password'})
  }
}

handleSubmit(){
  this.setState({emailError: ''});
  this.setState({passwordError: ''});
  this.handleEmail();
  this.handlePassword();
}

handleChange(event) {
  event.preventDefault();
  this.setState({value: event.nativeEvent.text});
  alert('handlechange')
}

updatePassword(event){
  event.preventDefault();
this.setState({passwordEntry: event.nativeEvent.text})
}

updateEmail(event){
  event.preventDefault();
this.setState({emailEntry: event.nativeEvent.text})
}

  render(){
    return(
      <View style={Styles.container}>
        <Text style={Styles.title}>Login</Text>
        <View style={{alignContent: 'center'}}>
          <Text style={Styles.warning}>{this.state.emailError}</Text>
          <TextInput
          style={Styles.textInput}
          placeholder="enter email address"
          keyboardType="email-address"
          onChange={this.updateEmail.bind(this)}
          />
          <Text style={Styles.warning}>{this.state.passwordError}</Text>
          <TextInput
          style={Styles.textInput}
          placeholder="enter password"
          secureTextEntry={true}
          onChange={this.updatePassword.bind(this)}
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
