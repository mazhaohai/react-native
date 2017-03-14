import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';
import Drawer from 'react-native-drawer'
export default class Page2 extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _pop(){
    this.props.navigator.pop();
  }
	render(){
	  return (
	      <View style={styles.container}>
	        
          <Text>打开抽屉</Text>
          <Image style={styles.icon} source={require('./img/home.png')} />
	      </View>
	    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});