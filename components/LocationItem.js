import React, { PureComponent } from 'react';
import { View, Text, Stylesheet, TouchableOpacity } from 'react-native';

class LocationItem extends PureComponent {

  handlePress = async () => {
    const res = await this.props.fetchDetails(this.props.place_id)

    console.log(res)
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress}
      >
        <Text>{this.props.description}</Text>
      </TouchableOpacity>
    )
  }
}

export default LocationItem;