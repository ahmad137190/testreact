import React from 'react';
import {Text, View} from "react-native";
import { StackNavigator } from 'react-navigation'; 

// export default class Profile extends React.Component {
//     render() {
//         return (
//             <View style={{ flex : 1  , backgroundColor : '#ff0040' , justifyContent : 'center' , alignItems : 'center'}}>
//                 <Text>Profile Page</Text>
//             </View>
//         )
//     }
// }
import Profile from "./Profile";
import Settings from "./Settings";
import Archive from "./Archive";

export default ProfileStack = StackNavigator({
    Profile : {
        screen : Profile
    },
    Settings : {
        screen: Settings
    },
    Archive : {
        screen : Archive
    }
})
