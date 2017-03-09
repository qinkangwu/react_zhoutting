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
    Navigator
} from 'react-native';
import ZTTHome from './../Home/ZTTHome';
import ZTTMine from './../Mine/ZTTMine';
import ZTTMore from './../More/ZTTMore';
import ZTTShop from './../Shop/ZTTShop';
import TabNavigator from 'react-native-tab-navigator';


export default class ZTTMain extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab : 'home'
        }
    }
    componentDidMount(){
        console.log(Platform)
    }
    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'home'}
                    title="Home"
                    renderIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_homepage'}} />}
                    renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_homepage_selected'}} />}
                    onPress={()=>{this.setState({selectedTab:'home'})}}
                >
                    <Navigator
                        initialRoute={{name: '首页',component:ZTTHome}}
                        configureScene={()=>Navigator.SceneConfigs.PushFromRight}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'shop'}
                    title="Shop"
                    renderIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_merchant_normal'}} />}
                    renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_merchant_selected'}} />}
                    onPress={()=>{this.setState({selectedTab:'shop'})}}
                >
                    <Navigator
                        initialRoute={{name: '商家',component:ZTTShop}}
                        configureScene={()=>Navigator.SceneConfigs.PushFromRight}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'mine'}
                    title="Mine"
                    renderIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_mine'}} />}
                    renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_mine_selected'}} />}
                    onPress={()=>{this.setState({selectedTab:'mine'})}}
                >
                    <Navigator
                        initialRoute={{name: '我的',component:ZTTMine}}
                        configureScene={()=>Navigator.SceneConfigs.PushFromRight}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
                    />
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'more'}
                    title="More"
                    renderIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_misc'}} />}
                    renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:'icon_tabbar_misc_selected'}} />}
                    onPress={()=>{this.setState({selectedTab:'more'})}}
                >
                    <Navigator
                        initialRoute={{name: '更多',component:ZTTMore}}
                        configureScene={()=>Navigator.SceneConfigs.PushFromRight}
                        renderScene={(route, navigator) => {
                            let Component = route.component;
                            return <Component {...route.params} navigator={navigator} />
                        }}
                    />
                </TabNavigator.Item>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    iconStyle:{
        width:Platform.OS==='ios'?30:25,
        height:Platform.OS==='ios'?30:25
    }
});