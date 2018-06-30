import React, { Component } from "react";

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ViewPagerAndroid,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Dimensions
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from "./Header";

export default class Articel extends Component {
  constructor() {
    super();
    //this.state = { count: 0 }
    this.state = {
      colorButtonHtext: {
        color: "#ffffff"
      },
      count: 0
    };
    // this.state = {
    // article: {
    // imageUrl: {
    // uri:"https://www.bankgol.com/wp-content/uploads/2016/12/Prestige-bankgol.jpg"
    // },
    // body:
    // "لورم ايپسوم متن ساختگي با توليد سادگي نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافيک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و براي شرايط فعلي تکنولوژي مورد نياز، و کاربردهاي متنوع با هدف بهبود ابزارهاي کاربردي مي باشد"
    // }
    // };
  }
  _login() {
    console.log("سلامممممم");
  }

  _onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    const { imageUrl, body } = this.props;
    //const article = this.state.article;
    //return <Article text1={article.body} image1={article.imageUrl} />;
    return (
      <View style={styles.container}>
        <View style={styles.pageStyle} key="1">
          <Image source={imageUrl} style={styles.image} />
          <Text numberOfLines={2} style={styles.welcome}>
            {body}
          </Text>
          <Text numberOfLines={2} style={styles.coast}>
            قیمت :پنج هزار تومان
          </Text>
        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get("window");
const gutter = 10;

const styles = StyleSheet.create({
  // container: {
  //   width: (width - gutter * 3) / 2,
  //   backgroundColor: "white",
  //   elevation: 4,
  //   shadowColor: "#fff",
  //   shadowOffset: { width: 0, height: 20 },
  //   shadowOpacity: 0.2,
  //   marginBottom: 4
  // },
  container: {
    flex: 0.5,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    margin: 4
  },
  welcome: {
    textAlign: "right",
    fontSize: 20,
    margin: 10,
    color: "#000"
  },
  coast: {
    textAlign: "right",
    fontSize: 14,
    margin: 10,
    color: "#127206"
  },
  image: {
    width: "100%",
    height: 100,
    margin: 2,
    // shadowColor:'#000',
    // shadowOffset:{width: 0 , height : 20},
    // shadowOpacity:.2,

    backgroundColor: "rgb(255,255,255)"
  },
  pageStyle: {
    flex: 1,
    height: 200,
    alignItems: "center",
    padding: 1
  },
  countText: {
    color: "#FF00FF"
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
