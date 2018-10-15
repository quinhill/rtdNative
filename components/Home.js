import React, { Component } from 'react';
import { View, Text, Button, Switch } from 'react-native';
import Search from './Search';

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
        <Search />
        {/* <Switch 
          onValueChange={this.toggleFavorites}
          value={this.state.favorites}
        /> */}
        {/* <Button
          title='Go to Itinerary'
          onPress={
            () => this.props.navigation.navigate('Itinerary')
          } */}
        {/* /> */}
      </View>
    );
  }
}

export default HomeScreen;