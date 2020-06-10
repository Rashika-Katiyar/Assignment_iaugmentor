
import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class App extends Component
{
  render()
  {
    return(
      <View style={styles.container}>
        <Text style={styles.para}>You have been Registered</Text>
        <Text style={{fontSize:25, marginBottom:20}}>Login with your credentials</Text>
        

        <View style={styles.head}>
        <Text style={{fontSize:18}}>Email: </Text>
        <TextInput
        placeholder="abc@xyz.com">
             
        </TextInput>
        </View>

      
        <View style={styles.head}>
        <Text style={{fontSize:18}}>Password: </Text>
        <TextInput secureTextEntry= {true}
        placeholder="Enter password">
             
        </TextInput>
        </View>
        
        <Button style={{marginBottom:20}} title='SUBMIT' ></Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    backgroundColor: '#ffffff',    
  },
  para: {
    //fontSize:  '18',
    fontFamily: 'Serif',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    margin: 100,
    fontSize: 30,

  },
  head:{
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    margin: 15,
    
  },

});