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
    View
} from 'react-native';
import ZTTHome from './../Home/ZTTHome';
import ZTTMine from './../Mine/ZTTMine';
import ZTTMore from './../More/ZTTMore';
import ZTTShop from './../Shop/ZTTShop';


export default class ZTTMain extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>asdasdsdasdsadsadaa</Text>
            </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});