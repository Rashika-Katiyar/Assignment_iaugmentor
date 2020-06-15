import React,{Component} from 'react';
import {Platform, View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {StackNavigator} from 'react-navigation';
import Login from "./src/Login";
import Home from "./src/Home";

const Navigation =StackNavigator({
  Home:{
    screen:Home,
  },
  Login:{
    screen:Login,
  }
})
export default Navigation; 


/* const RootStack = createStackNavigator(
  {
    Login: Login,
    Home: Home,
    Page3: Page3,
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
} */