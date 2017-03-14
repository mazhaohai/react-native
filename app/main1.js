import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  BackAndroid,
  View
} from 'react-native';
import Main from './main';
let _navigator;
BackAndroid.addEventListener('hardwareBackPress', function() {
  if(_navigator == null){
    return false;
  }
  if(_navigator.getCurrentRoutes().length === 1){
    return false;
  }
  _navigator.pop();
  return true;
});
export default class Main1 extends Component{
  render(){
    return (
        <Navigator
          initialRoute={{ component: Main }}
          configureScene={(route, routeStack) => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            _navigator = navigator;
              return <Component  
                {...route.params} navigator={navigator}
              />
              //  上面的route.params 是为了方便后续界面间传递参数用的
          }} />
      );
  }
}