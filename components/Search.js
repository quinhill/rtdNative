import React, { Component } from 'react';
import { 
  View, 
  Switch, 
  Button, 
  TextInput 
} from 'react-native';
import StartAddress from './StartAddress';

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      departing: true
    }
  }


  render() {
    return (
      <View>
        <StartAddress />
      </View>
    );
  }
}