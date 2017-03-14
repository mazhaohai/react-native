 
import React, {Component} from 'react';  
import {  
    StyleSheet,  
    View,  
    Image,
    TouchableOpacity,
    Text  
} from 'react-native';  
import TabNavigator from 'react-native-tab-navigator'   
import Page1 from './page1'  
import Page2 from './drawer'
import Page3 from './page3'   
import Nav1 from './nav1'    
import Icon from 'react-native-vector-icons/Ionicons';



import ScrollableTabView, { ScrollableTabBar,DefaultTabBar } from 'react-native-scrollable-tab-view';
import Tabbar from './tabbar';
export default class Main extends Component {  
  
    constructor(props){  
        super(props)  
        this.state={  
            selectedTab:'首页',  
        }  
    }  
  
  
    render() {  
        return (  
            <View style={styles.container} >  
                <TabNavigator>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '首页'}  
                        title="首页"  
                        //tabStyle={{backgroundColor:'#007aff'}}
                        titleStyle={styles.tabText}  
                        badgeText="19"
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Text>首页</Text>}  
                        renderSelectedIcon={() => <Image style={styles.icon} source={require('./img/home.png')} />}  
                        onPress={() => this.setState({ selectedTab: '首页' })}>  
                        <Nav1 navigator={this.props.navigator}/>  
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '购物车'}  
                        title="购物车"  
                        //tabStyle={{backgroundColor:'#007aff'}}
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} />}  
                        onPress={() => this.setState({ selectedTab: '购物车' })}>  
                        <Page2 />  
                    </TabNavigator.Item>  
                    <TabNavigator.Item  
                        selected={this.state.selectedTab === '我的'}  
                        title="我的"  
                        //tabStyle={{backgroundColor:'#007aff'}}
                        titleStyle={styles.tabText}  
                        selectedTitleStyle={styles.selectedTabText}  
                        renderIcon={() => <Image style={styles.icon} />}  
                        renderSelectedIcon={() => <Image style={styles.icon} />}  
                        onPress={() => this.setState({ selectedTab: '我的' })}>  
                        <Page3 />  
                    </TabNavigator.Item>  
                </TabNavigator>  
            </View>  
        );  
    }
    // render() {
    //     return <ScrollableTabView
    //       renderTabBar={() => <DefaultTabBar />}
    //       ref={(tabView) => { this.tabView = tabView; }}
    //     >
    //       <Text tabLabel='Tab #1'>My</Text>
    //       <Text tabLabel='Tab #2'>favorite</Text>
    //       <Text tabLabel='Tab #3'>project</Text>
    //       <TouchableOpacity tabLabel='Back' onPress={() => this.tabView.goToPage(0)}>
    //         <Text>Lets go back!</Text>
    //       </TouchableOpacity>
    //     </ScrollableTabView>;
    //   }
}  
  
let styles = StyleSheet.create({  
    container: {  
        flex: 1  
    },  
    tabText: {  
        color: "#000000",  
        fontSize: 13  
    },  
    selectedTabText: {  
        color: "#007aff",  
        fontSize: 13  
    },  
    icon: {  
        width: 20,  
        height: 20  
    }  
}); 



