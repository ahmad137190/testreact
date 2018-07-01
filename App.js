/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import Login from "./src/component/Login";
import Articels from "./src/component/Articels";
import AppTest from "./src/AppTest";
import { I18nManager } from 'react-native';
I18nManager.forceRTL(true);
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ViewPagerAndroid,
  ScrollView,
  Button
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});


export default class App extends Component{
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
  constructor() {
    super();
    this.state = {
      article: {
        imageUrl: {
          uri:
            "https://www.bankgol.com/wp-content/uploads/2016/12/Prestige-bankgol.jpg"
        },
        body:
          "لورم ايپسوم متن ساختگي با توليد سادگي نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافيک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و براي شرايط فعلي تکنولوژي مورد نياز، و کاربردهاي متنوع با هدف بهبود ابزارهاي کاربردي مي باشد"
      },
      article2: {
        imageUrl: {
          uri:
            "http://cephuscorner.jadedragononline.com/wp-content/uploads/2015/03/cockatiel2.jpg"
        },
        body:
          "لورم ايپسوم متن ساختگي با توليد سادگي نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافيک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و براي شرايط فعلي تکنولوژي مورد نياز، و کاربردهاي متنوع با هدف بهبود ابزارهاي کاربردي مي باشد"
      }
    };
  }

  render() {
    const article = this.state.article;
    const article222222 = this.state.article2;
    return (
      // <Article
      //   text2={article222222.body}
      //   image2={article222222.imageUrl}
      //   text1={article.body}
      //   image1={article.imageUrl}
      // />

      // <Login
      //
      // />

      // <Articels articles={this.state.articles} />


      <AppTest

      />
    );
  }
}

class Article extends Component {
  render() {
    const { image1, text1 } = this.props;
    const { image2, text2 } = this.props;
    return (
      <ScrollView>
        <View style={styles.container}>
          <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
            <View style={styles.pageStyle} key="1">
              <Image source={image1} style={styles.image} />
              <Text style={styles.welcome}> گل </Text>
            </View>
            <View style={styles.pageStyle} key="2">
              <Image source={image2} style={styles.image} />
              <Text style={styles.welcome}> پرنده </Text>
            </View>
          </ViewPagerAndroid>
          <Button
            title="بیشتر"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={styles.buttom_more}
          />
          <Text style={styles.instructions}> {text1} </Text>
          <Text style={styles.welcome}> خوش آمديد </Text>
          <Text style={styles.instructions}> احسان فهامي ادادمه بدم؟ </Text>
          <Text style={styles.instructions}> {instructions} </Text>
        </View>

        <View style={styles.viewparent}>
          <View style={styles.view1} />
          <View style={styles.view2} />
          <View style={styles.view3} />
          <View style={styles.view4} />
          <View style={styles.view5} />
        </View>
      </ScrollView>
    );
  }
}

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
  buttom_more: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "green",
    width: "100%",
    height: 200
  },
  instructions: {
    textAlign: "center",
    color: "green",
    marginBottom: 5,
    fontSize: 16,
    padding: 10
  },
  image: {
    width: "100%",
    height: 200,
    margin: 2,
    // shadowColor:'#000',
    // shadowOffset:{width: 0 , height : 20},
    // shadowOpacity:.2,
    elevation: 4,
    backgroundColor: "rgb(255,255,255)"
  },
  viewPager: {
    width: "100%",
    height: 300,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  pageStyle: {
    width: 300,
    height: 400,
    alignItems: "center",
    padding: 20
  },

  viewparent: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
  view1: {
    width: 100,
    height: 100,
    backgroundColor: "#00B0FF"
  },
  view2: {
    width: 100,
    height: 100,
    backgroundColor: "#00BFA5"
  },
  view3: {
    width: 100,
    height: 100,
    backgroundColor: "#AFB42B"
  },
  view4: {
    width: 100,
    height: 100,
    backgroundColor: "#EF6C00"
  },
  view5: {
    width: 100,
    height: 100,
    backgroundColor: "#9CCC65"
  }
});
