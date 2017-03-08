/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import ZTTMain from './component/Main/ZTTMain';

export default class zhoutting extends Component {
  render() {
    return (
      <ZTTMain />
    );
  }
}
AppRegistry.registerComponent('zhoutting', () => zhoutting);
