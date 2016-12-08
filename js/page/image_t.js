import React, {Component} from 'react'
import {
    Navigator, Image
}from 'react-native'
function Home() {
    class HomeComponent extends Component {
        constructor() {
            super();
        }

        render() {
            let pic = {
                uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
            };
            return <Image source={pic} style={{width: 193, height: 110}}/>
        }
    }
    return <HomeComponent/>
}
module.exports = Home;
