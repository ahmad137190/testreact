import React from 'react';
import { Text, View } from "react-native";


export default class Search extends React.Component {
    render() {
        return (
            <View style={
                {
                    flex: 1,
                    backgroundColor: '#c4b22f',
                    justifyContent: 'center',
                    alignItems: 'center'
                }
            }>
                <Text>Search Page</Text>
            </View>
        )
    }
}
