/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// import rootReducer from '../reducers';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import { StyleSheet } from 'react-native';
// import SignIn from './SignIn';
// import SignUp from './SignUp';
import ItineraryScreen from './Itinerary';
import HomeScreen from './Home';
import { createStackNavigator } from 'react-navigation';

// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <RootStack />
      // </Provider>
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
