/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet } from 'react-native';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
import ItineraryScreen from './Itinerary';
import HomeScreen from './Home';
import { createStackNavigator } from 'react-navigation';


export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Itinerary: ItineraryScreen
},
{
  initialRouteName: 'Home'
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
