import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import Nav2 from './nav2';
import Tabs from './tabs';

export default class Nav1 extends Component{
   constructor(props) {
    super(props);
    this.state = {

    };
  }
  _push(){
    this.props.navigator.push({component:Nav2})
  }
  _pop(){
    this.props.navigator.pop();
  }
  render(){
    return (
        <View style={styles.container}>
          <Tabs navigator={this.props.navigator}/>
          
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor:'#C0FF3E'
  }
})