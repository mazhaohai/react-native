import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import AudioExample from './audio';
export default class Page3 extends Component{
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
	        
          <AudioExample />
	      </View>
	    );
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    
  }
});