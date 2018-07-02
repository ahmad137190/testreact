import React from 'react';
import {TabBarBottom, TabNavigator} from "react-navigation";
import {Text,
     View,
      FlatList,
    StatusBar,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Articel from "./../../component/Articel";
import EStyleSheet from 'react-native-extended-stylesheet';
class Tab1 extends React.Component {
    componentWillMount() {
        this.setState({
          articles: [
            {
              imageUrl: {
                uri:
                  "http://www.kalleh.com/book/sites/default/public/styles/article_list/public/content/articles/denor-omlett.jpg"
              },
              body: "غذای عالی"
            },
            {
              imageUrl: {
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLnSBCbRZd2Wq8TKhN_GS8rJHCYwnorkz_HAePRjkbPPNg2ic"
              },
              body: "جوجه کباب"
            },
            {
              imageUrl: {
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvquUSLKiB5P2lXGONpKVX1S7sZR9RgI_3qEwBlZk2_eXNGPe03g"
              },
              body: "چلو مرغ"
            },
            {
              imageUrl: {
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WX5PtOEnGtZsTpeveq3gEiAzeHVKVz6uzsdOGEFe1-9qK-zSUA"
              },
              body: "چلو کباب"
            },
            {
              imageUrl: {
                uri:
                  "https://www.fardanews.com/files/fa/news/1394/7/29/322123_375.jpg"
              },
              body: "چلو ماهی"
            },
            {
              imageUrl: {
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLnSBCbRZd2Wq8TKhN_GS8rJHCYwnorkz_HAePRjkbPPNg2ic"
              },
              body: "جوجه کباب"
            },
            {
              imageUrl: {
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvquUSLKiB5P2lXGONpKVX1S7sZR9RgI_3qEwBlZk2_eXNGPe03g"
              },
              body: "چلو مرغ"
            },
            {
              imageUrl: {
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7WX5PtOEnGtZsTpeveq3gEiAzeHVKVz6uzsdOGEFe1-9qK-zSUA"
              },
              body: "چلو کباب"
            },
            {
              imageUrl: {
                uri:
                  "http://www.kalleh.com/book/sites/default/public/styles/article_list/public/content/articles/denor-omlett.jpg"
              },
              body: "غذای عالی"
            },
            {
              imageUrl: {
                uri:
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLnSBCbRZd2Wq8TKhN_GS8rJHCYwnorkz_HAePRjkbPPNg2ic"
              },
              body: "جوجه کباب"
            }
          ]
        });
      }


    render() {
        console.log(this.props);
        return (
            <View style={{ flex : 1 , backgroundColor : 'white'}}>
                {/* <Text>Tab 1</Text> */}
                
                <StatusBar hidden />
                    <FlatList
                        data = {this.state.articles} 
                        renderItem={({ item }) => (
                            <Articel body={item.body} imageUrl={item.imageUrl} />
                        )}
                        keyExtractor={(item, index) => index}
                        // ListHeaderComponent={() => <Header />}
                        numColumns={2}
                        columnWrapperStyle={styles.Flatlistchild}
                    />
            </View>
        )
    }
}


class Tab2 extends React.Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'red'}}>
                <Text>Tab 2</Text>
            </View>
        )
    }
}

class Tab3 extends React.Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'black'}}>
                <Text>Tab 3</Text>
            </View>
        )
    }
}

class Tab4 extends React.Component {
    render() {
        return (
            <View style={{ flex : 1 , backgroundColor : 'blue'}}>
                <Text>Tab 4</Text>
            </View>
        )
    }
}



export default App = TabNavigator({
    Tab1 : {
        screen : Tab1,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-heart" size={30} color={tintColor} />
        }
    },
    Tab2 : {
        screen : Tab2,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-heart" size={30} color={tintColor} />
        }
    },
    Tab3 : {
        screen : Tab3,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-add-circle" size={30} color={tintColor} />
        }
    },
    Ta4: {
        screen : Tab4,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <Icon name="md-search" size={30} color={tintColor} />
        }
    }
},{
    tabBarOptions : {
        showLabel : false,
        activeTintColor : 'rgba(0,0,0,1)',
        inactiveTintColor : 'rgba(0,0,0,.3)'
    },
    tabBarComponent : TabBarBottom,
    swipeEnabled : false,
    animationEnabled : false
}
)
const styles = EStyleSheet.create({
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      backgroundColor: "red",
      margin: 10
    },
    rootFlatlist: {
      flex: 1,
      backgroundColor: "white"
    },
    Flatlistchild: {
      flexDirection: "row-reverse",
      flexWrap: "wrap",
      justifyContent: "space-between",
  
      margin: 5
    }
  });