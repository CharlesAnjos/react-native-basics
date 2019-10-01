import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}

export default class Props2 extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greetings name='Rexxar' />
        <Greetings name='Jaina' />
        <Greetings name='Valeera' />
      </View>
    );
  }
}
