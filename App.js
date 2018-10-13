/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { StyleSheet, View} from 'react-native';
import SignIn from './SignIn';
import Navigation from './Navigation';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SignIn />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
