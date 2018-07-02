import {Platform } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
export default styles = EStyleSheet.create({
    headerTitleStyle : {
        // ...Platform.select({
        //     ios : {
        //         fontFamily : 'IRANSansMobile',
        //         fontWeight : "bold"
        //     } ,
        //     android : {
        //         fontFamily : 'IRANSansMobile_Bold',
        //     }
        // }),
        '@media ios' : {
            fontFamily : 'IRANSansMobile',
            fontWeight : "bold"
        },
        '@media android' : {
            fontFamily : 'IRANSansMobile_Bold',
        },
        fontSize : 18,
        color : '#333',
        margin : 10
    } ,
    tabNavigatorProfileIcon : {
        width : 26 ,
        height : 26 ,
        borderRadius: 13 ,
        borderWidth : 1 ,
        borderColor : '#333'
    }
})