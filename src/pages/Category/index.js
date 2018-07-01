import React from 'react';
import {Text, View} from "react-native";


export default class Category extends React.Component {
    render() {
        return (
            <View style={{ flex : 1  , backgroundColor : '#16a085' , justifyContent : 'center' , alignItems : 'center'}}>
                <Text>Category Page</Text>
            </View>
        )
    }
}
