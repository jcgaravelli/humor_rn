/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Consumo from './js/scenes/Consumo';
import { AppRegistry } from 'react-native';

export default class humor_rn extends Component {
  render() {
    return (
      <Consumo/>
    );
  }
}

AppRegistry.registerComponent('humor_rn', () => humor_rn);
