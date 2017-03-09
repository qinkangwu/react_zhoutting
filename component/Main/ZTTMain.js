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
    renderTabBarItem(title,selectedTab,icon,selectedIcon,component){
        return(
            <TabNavigator.Item
                selected={this.state.selectedTab === selectedTab}
                title={title}
                renderIcon={() => <Image style={styles.iconStyle} source={{uri:icon}} />}
                renderSelectedIcon={() => <Image style={styles.iconStyle} source={{uri:selectedIcon}} />}
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
            >
                <Navigator
                    initialRoute={{name: title,component:component}}
                    configureScene={()=>Navigator.SceneConfigs.PushFromRight}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component {...route.params} navigator={navigator} />
                    }}
                />
            </TabNavigator.Item>
        )
    }
    render() {
        return (
            <TabNavigator>
                {this.renderTabBarItem('首页','home','icon_tabbar_homepage','icon_tabbar_homepage_selected',ZTTHome)}
                {this.renderTabBarItem('商店','shop','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected',ZTTShop)}
                {this.renderTabBarItem('我的','mine','icon_tabbar_mine','icon_tabbar_mine_selected',ZTTMine)}
                {this.renderTabBarItem('更多','more','icon_tabbar_misc','icon_tabbar_misc_selected',ZTTMore)}
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