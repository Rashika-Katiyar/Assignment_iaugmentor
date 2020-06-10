import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity} from 'react-native';



export default class App extends Component
{
  render()
  {
    return(
      <View style={styles.container}>
        <Text style={styles.para}>Register Here</Text>
        <View style={styles.head}>
        <Text style={{fontSize:18}}>Name: </Text>
        <TextInput
        placeholder="Enter name">
             
        </TextInput>
        </View>

        <View style={styles.head}>
        <Text style={{fontSize:18}}>Email: </Text>
        <TextInput
        placeholder="abc@xyz.com">
             
        </TextInput>
        </View>

        <View style={styles.head}>
        <Text style={{fontSize:18}}>Date of Birth: </Text>
        <TextInput
        placeholder="DD/MM/YYYY">
             
        </TextInput>
        </View>

        <View style={styles.head}>
        <Text style={{fontSize:18}}>Password: </Text>
        <TextInput secureTextEntry= {true}
        placeholder="Enter password">
             
        </TextInput>
        </View>
        
        <Button title='SUBMIT DETAILS'></Button>
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
  
    fontFamily: 'Serif',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    margin: 100,
    fontSize: 30,

  },
  head:{
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    margin: 15,
    
  },

});