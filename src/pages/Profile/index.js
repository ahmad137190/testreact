import React from 'react';
import {Text, View} from "react-native";


export default class Profile extends React.Component {
    render() {
        return (
            <View style={{ flex : 1  , backgroundColor : '#ff0040' , justifyContent : 'center' , alignItems : 'center'}}>
                <Text>Profile Page</Text>
            </View>
        )
    }
}
