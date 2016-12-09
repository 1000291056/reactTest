/**
 * Created by wufeifei on 2016/12/8.
 */
import React, {Component} from 'react'
import {Navigator, DrawerLayoutAndroid, View,Text} from 'react-native'
import NavigatorCp from './NavigatorCp'
export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        var navigationView = (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
            </View>
        );
        return <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.left}
            renderNavigationView={()=>navigationView}>
                <Navigator
                    initialRoute={
                    {title: '首页', index: 0}}
                    renderScene={(route, navigate)=>
                        <NavigatorCp
                            name={route.title}
                            onForward={()=> {
                                const nextIndex = route.index + 1;
                                navigate.push({title: '我是页面' + nextIndex, index: nextIndex})
                            }}
                            onBack={()=> {
                                if (route.index > 0) {
                                    navigate.pop();
                                }
                            }}
                        ></NavigatorCp>}
                ></Navigator>
        </DrawerLayoutAndroid>
    }
}