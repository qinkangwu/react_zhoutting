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
    TouchableOpacity
} from 'react-native';
import ZTTHomeDetail from './ZTTHomeDetail';
export default class ZTTHome extends Component {
    pushToDetail(){
        this.props.navigator.push({
            component : ZTTHomeDetail,
            title:'详情页'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.pushToDetail.bind(this)}>
                    <Text>首页</Text>
                </TouchableOpacity>
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