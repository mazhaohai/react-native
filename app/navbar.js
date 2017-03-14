import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Navbar extends Component{
   constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
  
    return (
      <View style={styles.container}>
        <View style={styles.buttonsleft}>
          <Text onPress={()=>{this.props.leftClick?this.props.leftClick():this.props.navigator.pop()}} style={styles.buttontextleft}><Icon
              name='ios-arrow-back'
              size={25}
              color='#0076FF'
              
            /></Text>
        </View>
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={styles.navtitle} numberOfLines={1}>{this.props.title}</Text>
        </View>
        <View style={styles.buttonsright}>
          <Text  onPress={()=>{this.props.rightClick()}} style={styles.buttontextright}>
            <Icon
              name='ios-menu'
              size={25}
              color='#0076FF'
              
            />
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    height:45,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor:'#fff'
  },
  buttonsleft:{
    width:60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsright:{
    width:60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttontextleft:{
    width:30,
    fontSize:17,
    letterSpacing: 0.5,
    color:'#0076FF'

  },
  buttontextright:{
    fontSize:17,
    letterSpacing: 0.5,
    color:'#0076FF'

  },
  navtitle:{
    letterSpacing: 0.5,
    fontSize: 17,
    letterSpacing: 0.5,
    color: '#333',
    fontWeight: '500',
  },

})