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
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';
import ZTTCommonCell from './ZTTCommonCell';

export default class ZTTMore extends Component {
    onClickHandle(text){
        alert(text);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navOutViewStyle}>
                    <Text style={styles.fontStyle}>text</Text>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.onClickHandle.bind(this,'设置')} style={styles.iconTopStyle}>
                        <Image source={{uri:'icon_mine_setting'}} style={styles.settingStyle} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{marginTop:10,marginBottom:10}}>
                        <ZTTCommonCell
                            title={"扫一扫"}
                        />
                    </View>
                    <View style={{marginTop:10,marginBottom:10}}>
                        <ZTTCommonCell
                            title={"省流量模式"}
                            isSwitch={true}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                    </View>
                    <View style={{marginTop:10,marginBottom:10}}>
                        <ZTTCommonCell
                            title={"省流量模式"}
                            isSwitch={true}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                        <ZTTCommonCell
                            title={"省流量模式"}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    settingStyle:{
        width:Platform.OS == 'ios'?30:24,
        height:Platform.OS == 'ios'?30:24,
    },
    iconTopStyle:{
        position:'absolute',
        right:10,
        bottom:12
    },
    navOutViewStyle:{
        height:Platform.OS == 'ios'? 64 : 44,
        backgroundColor:'rgba(255,96,0,1)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    fontStyle:{
        color:'#fff',
        fontSize:18,
        paddingTop:10
    }
});