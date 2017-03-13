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
    TouchableOpacity,
    TextInput,
    Image,
    Platform
} from 'react-native';
import ZTTHomeDetail from './ZTTHomeDetail';
import Dimensions from 'Dimensions';
let width = Dimensions.get('window').width;
export default class ZTTHome extends Component {
    pushToDetail(){
        this.props.navigator.push({
            component : ZTTHomeDetail,
            title:'详情页'
        })
    }
    alertHandle(text){
        alert(text);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBarStyle}>
                    <TouchableOpacity activeOpacity={0.5} onPress={this.alertHandle.bind(this,'切换地址')}><Text style={styles.leftLocationStyle}>绥阳</Text></TouchableOpacity>
                    <TextInput
                        placeholder={'请输入商家,品类,商圈'}
                        style={styles.topInputStyle}
                    />
                    <View style={styles.rightImageViewStyle}>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.alertHandle.bind(this,'消息')}>
                            <Image source={{uri : 'icon_homepage_message'}} style={styles.navRightImageStyle}/>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={this.alertHandle.bind(this,'扫描二维码')}>
                            <Image source={{uri : 'icon_homepage_scan'}} style={styles.navRightImageStyle} />
                        </TouchableOpacity>
                    </View>
                </View>
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
        backgroundColor: '#e8e8e8',
    },
    navRightImageStyle:{
        width:Platform.OS == 'ios'?30:24,
        height:Platform.OS == 'ios'?30:24,
        marginLeft:5
    },
    navBarStyle:{
        height:Platform.OS == 'ios'? 64 : 44,
        backgroundColor:'rgba(255,96,0,1)',
        flexDirection:'row',
        alignItems:'center'
    },
    topInputStyle:{
        width:width*0.67,
        height:35,
        marginTop:22,
        backgroundColor:'#fff',
        borderRadius:5,
        paddingLeft:10

    },
    rightImageViewStyle:{
        justifyContent:'center',
        flexDirection:'row',
        height:64,
        alignItems:'center',
        paddingTop:13,
    },
    leftLocationStyle:{
        fontSize:16,
        height:64,
        textAlign:'center',
        lineHeight:64,
        paddingTop:5,
        paddingLeft:5,
        paddingRight:10,
        color:'#fff'
    }
});