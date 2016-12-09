/**
 * Created by wufeifei on 2016/12/8.
 */
import React, {Component, PropTypes} from 'react'
import {View, Text, TouchableHighlight} from 'react-native';
export default class NavigatorCp extends Component {
    static proTypes = {
        name: PropTypes.string.isRequired,//页面title
        onBack: PropTypes.func.isRequired,//返回方法
        onForward: PropTypes.func.isRequired//下一页面

    }


    render() {
        return <View>
            <Text>{this.props.name}</Text>
            <TouchableHighlight onPress={this.props.onForward}>
                <Text>点击进入下一页面</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.props.onBack}>
                <Text>点击返回上一页面</Text>
            </TouchableHighlight>
        </View>
    }
}
module.exports=NavigatorCp