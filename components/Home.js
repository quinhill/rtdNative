import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          title='Go to Itinerary'
          onPress={() => this.props.navigation.navigate('Itinerary')}
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Home: { screen: HomeScreen }
});