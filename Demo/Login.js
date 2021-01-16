import React from 'react';
import { ImageBackground,StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';


export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  
  render(){
    return (
       <View style={{ width: "100%", height: "100%"}}>
<ImageBackground source = {require("./images/shopping.jpeg")}
        style = {styles.bgImageStyle}
        >
      <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
    <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginBtn} onPress={() =>
            this.props.navigation.navigate('Dashboard')
          }>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText} onPress={() =>
            this.props.navigation.navigate('Signup')
          }>Signup</Text>
        </TouchableOpacity>

        </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:25,
    width: "100%",
    height: "60%",
    opacity: 0.7
 
  },
  bgImageStyle: {
    width: "100%",
    height: "100%", 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"white",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"white",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"black",
    fontSize:14
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    fontSize:14,
    color:"black"
  }
});
