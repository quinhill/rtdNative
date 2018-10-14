import React, { Component } from 'react';
import { View, Text, Button, Switch } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: true
    }
  }

  toggleFavorites = (value) => {
    this.setState({favorites: value})
  }

  render() {
    return (
      <View>
        <Switch 
          onValueChange={this.toggleFavorites}
          value={this.state.favorites}
        />
        <Button
          title='Go to Itinerary'
          onPress={() => this.props.navigation.navigate('Itinerary')}
        />
      </View>
    );
  }
}

export default HomeScreen;