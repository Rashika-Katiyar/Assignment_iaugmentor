import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class App extends Component
{
  render()
  {
    return(
        <View>
            <Text style={{alignItems:"center",fontSize: 30}}>
                Welcome to the home page!
            </Text>

            <Button style={{marginTop:20}} title='Go Back' onPress={()=>this.props.navigation.navigate("Login")}></Button>
        </View>

    );
  }
}
