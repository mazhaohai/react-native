import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  DeviceEventEmitter,
  View,
} from 'react-native';

import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Tabbar from './tabbar';

import Nav2 from './nav2';



export default class Blink extends Component{

  
  constructor(props) {
    super(props);
    this.state = {
      currentindex:0
    };
  }
  _goPage(index){
    //点击tabbar不进行滚动操作
    this.state.tabclick=true;
    this.tabView.goToPage(index);
  }
  _push(){
    this.props.navigator.push({component:Nav2})
  }
  render() {
    const self=this;
    return <ScrollableTabView
      style={{marginTop: 20}}
      initialPage={0}
      tabBarPosition='top'
      scrollWithoutAnimation ={true}
      onScroll={(value)=>{
        if(!this.state.tabclick){
          DeviceEventEmitter.emit('tabbarEvent',{scrollindex:value});
        }
        //重置点击状态，可以联动滚动
        if(value%1===0){
          this.state.tabclick=false;
        }
      }}
      onChangeTab={(tabobj)=>{
        this.setState({currentoffsetX:tabobj.i*100});
      }}
      renderTabBar={() =>{return <Tabbar {...this.state} gopage={(index)=>{this._goPage(index)}} />}}
      ref={(tabView) => { this.tabView = tabView; }}
    >
      <View tabLabel='Tab #1' style={styles.tabcontainer}><Text onPress={()=>{this._push()}}>跳转到nav2</Text></View>
      <View tabLabel='Tab #2' style={styles.tabcontainer}><Text>My2</Text></View>
      <View tabLabel='Tab #3' style={styles.tabcontainer}><Text>My3</Text></View>
      <View tabLabel='Tab #4' style={styles.tabcontainer}><Text>My4</Text></View>
      <View tabLabel='Tab #5' style={styles.tabcontainer}><Text>My5</Text></View>
      <View tabLabel='Tab #6' style={styles.tabcontainer}><Text>My6</Text></View>
      <View tabLabel='Tab #7' style={styles.tabcontainer}><Text>My7</Text></View>
      <View tabLabel='Tab #8' style={styles.tabcontainer}><Text>My8</Text></View>
      <View tabLabel='Tab #9' style={styles.tabcontainer}><Text>My9</Text></View>
      <View tabLabel='Tab #10' style={styles.tabcontainer}><Text>My10</Text></View>
      <View tabLabel='Tab #11' style={styles.tabcontainer}><Text>My11</Text></View>
      <View tabLabel='Tab #12' style={styles.tabcontainer}><Text>My12</Text></View>
    </ScrollableTabView>;
  }
}
const styles = StyleSheet.create({
  tabcontainer:{
    flex:1,
    backgroundColor:"#fff"
  }
})