import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React, { useState } from "react";
import { Alert, Dimensions, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');
export default function App() {
  const [matric_number, setMatric_number] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Attempt', `Matric Number: ${matric_number}\nPassword: ${password}`);
  };

  const router = useRouter();

  return (
 <SafeAreaView style={{flex:1}}>
    <View style={styles.body}>
    <View style={styles.container}>
      {/*Haeder /icon+Title*/}
      <View style={styles.header}>
        <Ionicons name="home-outline" size={27}  color={"#585757"} style={{textAlign: 'center', marginTop: 10}}/>
        <Text style={styles.title}> Welcome to HRS</Text>
        <Text style={styles.subtitle}> Hostel Room Selection System</Text>
     </View>
      
      {/*Form Input fields*/}
     <View style={styles.form} >
      <Text style={{fontWeight:'bold'}}>Matric Number</Text>
      <View style={styles.inputContainer}>
      <Ionicons name="person-outline" size={20}  color={"#999898"} /> 
      <TextInput
        style={styles.input}
        placeholder={ "Enter your matric number"}
        value={matric_number}
        onChangeText={setMatric_number}
        autoCapitalize='none'
      />
      </View>
      
     
      <Text style={{fontWeight:'bold'}}>Password</Text>
      <View style={styles.inputContainer}>
      <Ionicons name="key-outline" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder={"Enter your password"}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      </View>
     {/*Login button*/}
      <Pressable style={({ pressed }) => [
                styles.loginButton,
                pressed && styles.loginButtonPressed,
              ]}
              onPress={handleLogin}
            >
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
      
     
         <Link href="./register">
           <Text style={{ marginTop: 20, color: '#585757' }}>
             Don't have an account? <Text style={{color:'#2321c4'}}>Register here</Text>
           </Text>

         </Link>
      </View>
    </View>
  </View>  
 </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#e1eefc',
    justifyContent: 'center',
    
  },
  header: {
    alignItems: 'center',
    marginBottom: 36,
  },
  container: {
    //flex: 1,
    justifyContent: 'center',
    //alignItems:'center',
    padding: 24,
    //marginTop: 200,
    backgroundColor:'#fff',
    width: '80%',
   // height:'50%',
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc9c9',
    //shadow
  //boxShadow: '0 6px 12px rgba(66, 65, 65, 0.15)',
  shadowColor: '#646262',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.15,
  shadowRadius: 12,
  
  // Android shadow
  elevation: 8,
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    color:'#191781',
  },
  subtitle:{
     fontSize: 16,
     textAlign: 'center',
     color:'#585757',
     marginTop: 12,
     marginBottom: 12,
  },
  input: {
    borderWidth: 0,
    borderColor: '#585757',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    flex:1,
    paddingVertical: 12,
  paddingLeft: 8,

  },
  loginButton: {
  backgroundColor: '#2321c4',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
},
loginButtonPressed: {
    opacity: 0.84,
    transform: [{ scale: 0.98 }],
  },
buttonText: {
  color: 'white',
  fontWeight: 'bold',
},
inputContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#f5f2f2',
  borderRadius: 10,
  paddingHorizontal: 12,
  marginBottom: 15,
  backgroundColor: '#f5f2f2',
},
form:{
  width:'100%'
}
});