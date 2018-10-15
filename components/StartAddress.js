import React, { Component } from 'react';
import { View, TextInput, ScrollView, ActivityIndicator } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import LocationItem from './LocationItem';

import { GoogleKey } from '../APIkey';

export default class StartAddress extends Component {
  render() {
    return (
      <View>
        <GoogleAutoComplete
          apiKey={GoogleKey}
          radius={5000}
          components='country:usa'
        >
        {(
          { 
            handleTextChange, 
            locationResults, 
            fetchDetails,
            isSearching 
          }
          ) => (
          <React.Fragment>
            {console.log(locationResults)}
            <View>
              <TextInput
                placeholder='Search'
                onChangeText={handleTextChange}
              />
            </View>
            {isSearching && <ActivityIndicator size='large' />}
            <ScrollView>
              {locationResults.map(location => (
                <LocationItem 
                  {...location}
                  fetchDetails={fetchDetails}
                  key={location.id}
                />
              ))}
            </ScrollView>
          </React.Fragment>
        )}

        </GoogleAutoComplete>
      </View>
    )
  }
}