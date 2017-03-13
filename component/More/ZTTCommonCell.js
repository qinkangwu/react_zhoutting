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
    Image,
    Platform,
    TouchableOpacity,
    Switch
} from 'react-native';


export default class ZTTCommonCell extends Component {
    constructor(props){
        super(props);
        this.state={
            title : '',
            isSwitch : this.props.isSwitch,
            switchValue : false
        };
        this.valueChangeHandle = this.valueChangeHandle.bind(this);
    }
    valueChangeHandle(){
        this.setState({
            switchValue:!this.state.switchValue
        })
    }
    render() {
        return (
        <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.container}>
                <Text style={{marginLeft:8}}>{this.props.title}</Text>
                {!this.state.isSwitch&&<Image source={{url:'icon_cell_rightArrow'}} style={styles.rightImageStyle} />}
                {this.state.isSwitch&&<Switch style={{marginRight:8}} value={this.state.switchValue} onValueChange={this.valueChangeHandle} />}
            </View>
        </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:Platform.OS == 'ios'?40:30,
        backgroundColor:'#fff',
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    rightImageStyle:{
        width:8,
        height:13,
        marginRight:8
    }
});