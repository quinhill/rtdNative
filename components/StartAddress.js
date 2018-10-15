import React, { Component } from 'react';
import { autocomplete } from '../autocomplete';
import { View, TextInput, ScrollView, TouchableHighlight, Text } from 'react-native';

class StartAddress extends Component {
  constructor() {
    super()
    this.state = {
      address: '',
      predictions: [],
    }
  }

  handleChange = async (address) => {
    this.setState({address})
    const result = await autocomplete(address)
    const predictions = result.predictions.map(place => (
      place.description
    ))
    this.setState({predictions: [...predictions]})
  }

  handlePress = (place) => {
    this.setState({address: place})
    this.setState({predictions: []})
  }


  render() {
    return (
      <View>
        <TextInput 
          onChangeText={
            (address) => this.handleChange({address})
          }
          value={this.state.address}
          placeholder='search'
        />
        <ScrollView>
          {this.state.predictions.map((place, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => this.handlePress(place)}
            >
              <Text>{place}</Text>
            </TouchableHighlight>
          ))}
        </ScrollView>
      </View>
    )
  }
}

export default StartAddress;