/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import Launch from './component/Main/ZTTLaunchImage'
export default class zhoutting extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name: '加载',component:Launch}}
            configureScene={()=>Navigator.SceneConfigs.PushFromRight}
            renderScene={(route, navigator) => {
              let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
            }}
        />
    );
  }
}

AppRegistry.registerComponent('zhoutting', () => zhoutting);
