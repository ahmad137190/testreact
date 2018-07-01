import { StackNavigator ,TabNavigator,createStackNavigator} from 'react-navigation';
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true);

import Home from './pages/Home';
import Article from './pages/Article';
import Category from './pages/Category';
import Follow from './pages/Follow';
import HomeUser from './pages/HomeUser';
import Profile from './pages/Profile';
import Search from './pages/Search';
Homestack = StackNavigator({
    Home: { screen: Home },
    Article: { screen: Article }
})

export default AppTest = TabNavigator({
    profile: {
        screen:Profile
    },
    Follow: {
        screen:Follow
    },
    HomeUser: {
        screen:HomeUser
    },
    Search: {
        screen:Search
    },
    Category: {
        screen:Category
    },
})

  
//  werew= createStackNavigator({
//     HomeUserOsol: { screen: HomeUserOsolScreen },
//     CategoryOsol: { screen: CategoryOsolScreen },
//   });