// const React = require('react');
// const SideMenu = require('react-native-side-menu');
// const Menu = require('./Menu');

// const {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TouchableOpacity,
// } = require('react-native');
import React, {Component} from 'react';  
import {  
    StyleSheet,  
    View,  
    Animated,
    Image,
    TouchableOpacity,
    Text  
} from 'react-native';  
import SideMenu from 'react-native-side-menu';
import Menu from  './menu'

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

module.exports = class Basic extends Component {
  state = {
    isOpen: false,
    selectedItem: 'About',
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
  }

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        edgeHitWidth={150}
        bounceBackOnOverdraw={true}
        menuPosition='left'
        animationFunction={(prop, value) => {

        return Animated.spring(
            prop,
            {
              toValue: value,
              friction: 9,
            }
          );
        }}  

        animationStyle={(value) => {
          return {
            transform: [{
              translateX: value,
            }, ],
          };
        }}
        onChange={(isOpen) => this.updateMenuState(isOpen)}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+Control+Z for dev menu
          </Text>
          <Text style={styles.instructions}>
            Current selected menu item is: {this.state.selectedItem}
          </Text>
        </View>
        
      </SideMenu>
    );
  }
};
