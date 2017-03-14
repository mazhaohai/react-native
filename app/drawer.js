// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   Button,
//   View,
//   Image
// } from 'react-native';
// import Drawer from 'react-native-drawer';
// // import Audio from './audio';
// // import Nav2 from './nav2';

// class Application extends Component {  
//   closeControlPanel() {
//     this._drawer.close()
//   }
//   openControlPanel() {
//     this._drawer.open()
//   }
//   render () {
//     return (
//       // <Drawer
//       //   ref={(ref) => this._drawer = ref}
//       //   content={<Nav2 />}
//       //   >
//       //   <Audio />
//       // </Drawer>
//       <View>
//         <Text>{123123}</Text>
//       </View>
//     )
//   }
//}
// class ControlPanel extends Component {  
  
//   render () {
//     return (
//       <View>
//         <Text>{123123}</Text>
//       </View>
//     )
//   }
// }
// 
// 
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Button,
  View,
  Image
} from 'react-native';
import Drawer from 'react-native-drawer';
import Nav2 from './nav2';
import Audio from './audio';
export default class Page2 extends Component{
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  openControlPanel() {
    //alert(this.refs.nav2.test);
    this._nav2.test()
    this.refs.drawer.open()
  }
    render () {
    return (
      <Drawer
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2} // 20% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity:(2-ratio)/2 }
        })}
        ref='drawer'
        content={<Nav2 ref={(ref)=>this._nav2 = ref}/>}

        >
        <Audio drawerHandle={()=>{
         
          this.openControlPanel()
        }}/>
      </Drawer>
    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
}