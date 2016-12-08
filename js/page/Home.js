/**
 * Created by wufeifei on 2016/12/8.
 */
import React, {Component} from 'react'
import {Navigator} from 'react-native'
import NavigatorCp from './NavigatorCp'
export default class Home extends Component {
    constructor() {
        super();
    }

    render() {
        return <Navigator
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
    }
}