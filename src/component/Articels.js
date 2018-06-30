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
  ListView,
  FlatList,
  StatusBar,
  SectionList
} from "react-native";
import Articel from "./Articel";
import Header from "./Header";
import LinearGradient from "react-native-linear-gradient";
export default class Articels extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   // const ds = new ListView.DataSource({
  //   //   rowHasChanged: (row1, row2) => row1 !== row2
  //   // });
  //   // this.state = {
  //   //   dataSource: ds.cloneWithRows(this.props.articles)
  //   // };
  // }
  _renderFlatListArticle(article) {
    console.log(article);
    <Articel body={article.body} imageUrl={article.imageUrl} />;
  }

  // _renderArticles(articlessss) {
  //   return articlessss.map((article2, index) => (
  //     <Articel key={index} body={article2.body} imageUrl={article2.imageUrl} />
  //   ));
  // }

  // _renderListViewArticles(article) {
  //   console.log(article);
  //   return <Articel key={index}  body={article.body} imageUrl={article.imageUrl} />;
  // }

  // render() {
  //     const { articles } = this.props;
  //     return (
  //         <ScrollView >
  //             {this._renderArticles(articles)}
  //         </ScrollView>
  //     )
  // }

  // render() {
  //   return (
  //     <ListView
  //       contentContainerStyle={styles.container}
  //       dataSource={this.state.dataSource}
  //       renderRow={this._renderListViewArticles}
  //     />
  //   );
  // }

  // render() {
  //   return (
  //     <FlatList
  //      data={this.props.articles}
  //   //   renderItem={this._renderListViewArticles}
  //     renderItem={({ item }) => this._renderFlatListArticle(item)}
  //       keyExtractor={({ item }) => console.log(item)}
  //     />
  //   );
  // }

  // render() {
  //   const article = this.state.articels[0];
  //   //return <Article text1={article.body} image1={article.imageUrl} />;
  //   return (
  //   <Articel text1={article.body} image1={article.imageUrl} />
  //   );
  // }

  render() {
    return (
      <View style={styles.rootFlatlist}>
        <StatusBar hidden />
        <FlatList
          data={this.props.articles}
          renderItem={({ item }) => (
            <Articel body={item.body} imageUrl={item.imageUrl} />
          )}
          keyExtractor={(item, index) => index}
          // ListHeaderComponent={() => <Header />}
          numColumns={2}
          columnWrapperStyle={styles.Flatlistchild}
        />
      </View>
    );
  }

  // render() {
  //
  //      const data = [
  //          { data : ['ابراهیم', 'احمد'] , key : 'آ'},
  //          { data : ['بهنام','بهروز','بهمن'], key :'ب'},
  //          { data : ['پیمان','پوریا','پیام'], key :'پ'}
  //      ];
  //
  //      return (
  //          <SectionList
  //             sections={data}
  //             renderItem={({item}) => <Text style={{ fontSize : 18 , padding : 10 , color : 'green'}}>{item}</Text>}
  //             renderSectionHeader={({ section }) => <Text style={{ fontSize : 18 , padding : 10 , color : 'red'}}>{section.key}</Text> }
  //             keyExtractor={(item , index) => index}
  //          />
  //      )
  //  }
}
const styles = StyleSheet.create({
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
