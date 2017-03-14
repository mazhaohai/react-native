import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import Navbar from './navbar';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Nav2 extends Component{
   constructor(props) {
    super(props);
    this.state = {
      title:'Nav标题'
    };
  }
  _pop(){
    this.props.navigator.pop();
  }
  test(){
    alert('ssss');
  }
  render(){
    return (
        <View style={styles.container}>
          <Navbar title={this.state.title} navigator={this.props.navigator} rightClick={()=>{alert(this.state.title)}}/>
          <View style={{flex:1}}>
          <Text><Icon
              name='ios-arrow-back'
              size={150}
              color='#000'
              
            /></Text>
            
            
          </View>
          
        </View>
      );
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#FFA500'
  },
  twitterOutline: {
    flexDirection: 'column',
    width: 70,
    height: 70,
    alignItems: 'center'
  },
  twitterIcon: {
    flex: 1,
    width: 40,
    height: 40
  },
})