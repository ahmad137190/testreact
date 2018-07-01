import React , { Component } from 'react';
import { View , Image , Text , StyleSheet , Platform , Dimensions , ScrollView} from 'react-native';
import OriginalStyle from './../assets/style';


class CategoryOsol extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Button
        title="Go to Jane's CategoryOsol"
        onPress={() =>
          navigate('Profile', { name: 'CategoryOsol' })
        }
      />
    );
  }
}