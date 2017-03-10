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
    Image
} from 'react-native';

import ZTTMain from './ZTTMain';
export default class ZTTLaunchImage extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.navigator.replace({
                component:ZTTMain
            })
        },2000)
    }
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.launchStyle}  />
        );
    }
}

const styles = StyleSheet.create({
    launchStyle:{
        flex:1
    }
});