import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { View, Text, Button } from 'react-native';

class ItineraryScreen extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
}

export default createStackNavigator({
  Itinerary: { screen: ItineraryScreen }
});