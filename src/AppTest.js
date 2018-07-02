import { StackNavigator ,TabNavigator,createStackNavigator,TabBarBottom,createBottomTabNavigator} from 'react-navigation';
import React, { Component } from "react";
import { I18nManager,
     View , Image , Text , StyleSheet  , Dimensions , ScrollViewA,  Platform } from 'react-native';
I18nManager.forceRTL(true);


import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import Follow from './pages/Follow';
import HomeUser from './pages/HomeUser';
import Profile from './pages/Profile';

import Search from './pages/Search';
import style from './assets/style';


// import { Tab, TabLayout } from 'react-native-android-tablayout';
// export default class AppTest extends Component{

//     render() {
//         return (
//           <View>
//             <TabLayout>
//               <Tab name="Tab 1"/>
//               <Tab name="Tab 2"/>
//               <Tab name="Tab 3"/>
//             </TabLayout>
//           </View>
//         );
//       }
// }

Homestack = StackNavigator({
    Home: { screen: Home },
    Article: { screen: Article }
})

export default AppTesteeee= TabNavigator({
    profile: {
        screen:Profile ,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Ionicons name="md-heart" size={30} color={tintColor} />
        }
    },
    Follow: {
        screen:Follow ,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Ionicons name="md-add-circle" size={30} color={tintColor} />
        }
    },
    HomeUser: {
        screen:HomeUser ,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Ionicons name="md-home" size={30} color={tintColor} />
        }
    },
    Search: {
        screen:Search ,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Ionicons name="md-search" size={30} color={tintColor} />
        }
    },
    Category: {
        screen:Category ,
        navigationOptions : { 
            tabBarIcon : ({ tintColor }) => 
            //<Ionicons name="md-add-circle" size={30} color={tintColor} />
            <Image source={require('./assets/images/svg1.png')} style={style.tabNavigatorProfileIcon} />
        }
    },
},
{
    tabBarComponent: TabBarBottom,
    tabBarPosition:'bottom' ,
}

)

  
//  werew= createStackNavigator({
//     HomeUserOsol: { screen: HomeUserOsolScreen },
//     CategoryOsol: { screen: CategoryOsolScreen },
//   });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
      color: "green"
    },
    container: {
        
        backgroundColor: "#16a085"
      }
  });

 AppTesteee21344342= createBottomTabNavigator(
    {
      HomeUser: HomeUser,
      Category: Category,
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'HomeUser') {
            iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Category') {
            iconName = `ios-options${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'green',
      },
    }
  );