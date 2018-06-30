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
  TouchableNativeFeedback
} from "react-native";
import styles from "./../assets/css/login";
import LinearGradient from "react-native-linear-gradient";
export default class Login extends Component<Props> {
  constructor() {
    super();
    //this.state = { count: 0 }
    this.state = {
      colorButtonHtext: {
        color: "#ffffff"
      },
      count: 0,
      article: {
        imageUrl: {
          uri:
            "https://www.bankgol.com/wp-content/uploads/2016/12/Prestige-bankgol.jpg"
        },
        body:
          "لورم ايپسوم متن ساختگي با توليد سادگي نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافيک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و براي شرايط فعلي تکنولوژي مورد نياز، و کاربردهاي متنوع با هدف بهبود ابزارهاي کاربردي مي باشد"
      }
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
    //const article = this.state.article;
    //return <Article text1={article.body} image1={article.imageUrl} />;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.linearGradient}
        >
          <View style={styles.loginbox}>
            <Text style={styles.loginTitle}>ورود</Text>
            <View style={[styles.countContainer]}>
              <Text style={[styles.countText]}>
                {this.state.count !== 0 ? this.state.count : null}
              </Text>
            </View>
            <View style={styles.inputGroups}>
              <Text style={styles.labelText}>ایمیل :‌ </Text>
              <TextInput
                style={styles.inputText}
                underlineColorAndroid="transparent"
                placeholder="لطفا ایمیل خود را وارد کنید"
              />
            </View>
            <View style={styles.inputGroups}>
              <Text style={styles.labelText}>پسورد :‌ </Text>
              <TextInput
                style={styles.inputText}
                underlineColorAndroid="transparent"
                secureTextEntry={true}
                placeholder="لطفا پسورد خود را وارد کنید"
              />
            </View>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.loginButton}>ورود به اپلیکیشن ها</Text>
            </TouchableOpacity>
            <TouchableHighlight
              style={styles.ButtonH}
              underlayColor="yellow"
              onPress={this._login}
              onShowUnderlay={() =>
                this.setState({
                  colorButtonHtext: {
                    color: "black"
                  }
                })
              }
              onHideUnderlay={() =>
                this.setState({
                  colorButtonHtext: {
                    color: "white"
                  }
                })
              }
            >
              <Text style={[styles.ButtonHtext, this.state.colorButtonHtext]}>
                بازگشت
              </Text>
            </TouchableHighlight>
            <TouchableOpacity>
              <Text style={styles.forgetPassword}>فراموش رمز عبور</Text>
            </TouchableOpacity>

            <TouchableNativeFeedback onPress={this._onPress}>
              <View style={styles.ButtonH}>
                <Text style={[styles.ButtonHtext, this.state.colorButtonHtext]}>
                  ایجاد حساب کاربری
                </Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

class Article extends Component {
  render() {
    const { image1, text1 } = this.props;
    return <View style={styles.container}> </View>;
  }
}
