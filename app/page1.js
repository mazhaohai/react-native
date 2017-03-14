import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import Nav1 from './nav1'
export default class Main extends Component{
   constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render(){
    return (
        <Navigator
          initialRoute={{ component: Nav1 }}
          configureScene={(route, routeStack) => {
              return Navigator.SceneConfigs.FloatFromRight;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
              return <Component {...route.params} navigator={navigator} />
              //  上面的route.params 是为了方便后续界面间传递参数用的
          }} />
      );
  }
}