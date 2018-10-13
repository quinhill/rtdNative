import React, { Component } from 'react';
import {Text, Navigator, TouchableHighlight} from 'react-native';

export default class Navigation extends Component {

  render() {

    const routes = [
      { title: 'Home', index: 0 },
      { title: 'Sign Up', index: 1 },
      { title: 'Sign In', index: 2 },
      { title: 'Tickets', index: 3 },
      { title: 'Password Forget', index: 4 },
      { title: 'Account', index: 5 },
      { title: 'Itinerary', index: 6 }
    ]

    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => 
          <TouchableHighlight onPress={() => {
            if (route.index === 0) {
              navigator.push(routes[1])
            } else {
              navigator.pop();
            }
          }}>
          <Text>Hello {routes.title}!</Text>
          </TouchableHighlight>
        }
      />
    )
  }
}
