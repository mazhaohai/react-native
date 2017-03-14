import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Dimensions,
  DeviceEventEmitter,
  Text,
  ScrollView,
  View
} from 'react-native';
const self=null;
const SCREEN_WIDTH = Dimensions.get('window').width;
export default class Tabbar extends Component{
  
   constructor(props) {

    super(props);
    self=this;
    this.state = {
      offsetX:0
    };
  }

  _pop(){
    this.props.navigator.pop();
  }
  _goPage(index){
    //滚动位置偏移量
    let _offsetX=-1;
    //左侧菜单如果不全部在窗口范围内，向右移动，确保菜单整体在窗口范围内
    if(this.state.offsetX>index*100){
      _offsetX=index*100;
    }
    //右侧菜单如果不全部在窗口范围内，向左移动，确保菜单整体在窗口范围内
    if((index+1)*100>(SCREEN_WIDTH+this.state.offsetX)){
      _offsetX=(index+1)*100-SCREEN_WIDTH;
    }
    if(_offsetX>-1){
      this._scrollView.scrollTo({y:0,x:_offsetX,animated:true});
      //记录菜单记录偏移量
      this.setState({offsetX:_offsetX});
    }
    //切换view
    this.props.gopage(index)
  }
  //注册事件监听
  componentDidMount(){
    this.subscription = DeviceEventEmitter.addListener('tabbarEvent', (data)=>{
      let _offsetX=-1;
      if(this.state.offsetX>data.scrollindex*100){
        _offsetX=data.scrollindex*100;
      }
      if((data.scrollindex+1)*100-this.state.offsetX>SCREEN_WIDTH){
        _offsetX=(data.scrollindex+1)*100-SCREEN_WIDTH;
      }
      if(_offsetX>-1){
        this._scrollView.scrollTo({y:0,x:_offsetX,animated:true});
        //tab切换完成
        if(data.scrollindex%1===0){
          this.setState({offsetX:_offsetX});
        }
      }
    });
  }
  //销毁事件
  componentWillUnmount(){
      this.subscription.remove();
  }

  render(){
      return(
          <View style={{height:50}} >
          <ScrollView 
            ref={component => this._scrollView = component} 
            style={styles.mainStyle} 
            horizontal={true} 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{backgroundColor:"#ff0000",height:50}}
            onMomentumScrollEnd={(e)=>{
              this.setState({offsetX:e.nativeEvent.contentOffset.x})
            }}
            >
              {this.renderItem()}
          </ScrollView>
        </View>
      );
  }

  renderItem() {
      // 数组
      var itemAry = [];
      // 颜色数组
      var colorAry = ['gray', 'green', 'blue', 'yellow', 'red', 'orange','gray', 'green', 'blue', 'yellow', 'black', 'orange'];
      // 遍历
      for (var i = 0; i<colorAry.length; i++) {
        ((index)=>{
          itemAry.push(
              <View key={index} style={[styles.itemStyle, {backgroundColor: colorAry[index]}]}>
                <Text  onPress={()=>{this._goPage(index)}} style={{height:50,textAlign: 'center',lineHeight:35}}>{index}</Text>
              </View>
          );
        })(i)
          
      }
      return itemAry;
  }
}
  var styles = StyleSheet.create({
    mainStyle:{
      height:50
     
    },
    scrollViewStyle: {
        
    },

    itemStyle: {
        // 尺寸
        width:100,
        height:50,
        
    },
}); 