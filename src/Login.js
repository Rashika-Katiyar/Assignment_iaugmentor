
import React,{Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button, TouchableOpacity, AsyncStorage} from 'react-native';
//inport {AsyncStorage} from "react-native"//

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

        <Button style={{marginBottom:20}} title='Save' onPress={this.saveData}></Button>
        
        <Button style={{marginBottom:20}} title='SUBMIT' 
        onPress={this.displayData}
        onPress={()=>this.props.navigation.navigate("Page3")}></Button>
      </View>
    );
  }
}
saveData() {
  Let obj = {
    email : "Email",
    password : "Password",
  }
  AsyncStorage.setItem('user',JSON.stringify(obj));
}
displayData() =async () => {
  try{
    let user =await AsyncStorage.getItem('user');
    alert("Details have been saved")
  }
  catch(error) {
    alert("Username not registered")
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