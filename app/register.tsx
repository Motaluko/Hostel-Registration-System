import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [matric_number, setMatric_number] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');

  const handleSubmit = () => {
    Alert.alert('Form Submitted', `Firstname: ${firstname}\nMiddlename: ${middlename}\nLastname: ${lastname}\nMatric Number: ${matric_number}\nGender: ${gender}\nPassword: ${password}\nConfirm Password: ${conpassword}`);

  };
   const router = useRouter();
   

  return (
   <View style={styles.body}>
    
    <View style={styles.container}>
      <View style={styles.header}>
      <Pressable onPress={() => router.push('/')}>
         <Text style={styles.title}> <Ionicons name="arrow-back" size={24} color="#2321c4" />Register</Text>
      </Pressable>
        <Text style={styles.subtitle}>Create your HRS account to book a hostel room</Text>
     </View>
      <Text style={{fontWeight:'bold'}}>First Name<Text style={{color:'red'}}>*</Text></Text>
      <View style={styles.inputContainer}>
      <Ionicons name="person-outline" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder="Jane"
        value={firstname}
        onChangeText={setFirstname}
      /></View>

      <Text style={{fontWeight:'bold'}}>Middle Name<Text style={{color:'red'}}>*</Text></Text>
      <View style={styles.inputContainer}>
      <Ionicons name="person-outline" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder="Alison"
        value={middlename}
        onChangeText={setMiddlename}
      /></View>

      <Text style={{fontWeight:'bold'}}>Last Name<Text style={{color:'red'}}>*</Text></Text>
      <View style={styles.inputContainer}>
      <Ionicons name="person-outline" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder="Doe"
        value={lastname}
        onChangeText={setLastname}
      /></View>

      <Text style={{fontWeight:'bold'}}>Matric Number<Text style={{color:'red'}}>*</Text></Text>
      <View style={styles.inputContainer}>
      <Ionicons name="card-outline" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder="22/0118"
        value={matric_number}
        onChangeText={setMatric_number}
      /></View>

      <Text style={{fontWeight:'bold'}}>Gender<Text style={{color:'red'}}>*</Text></Text>
      <View style={styles.inputContainer}>
      <Ionicons name="male-female" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder="Male/Female"
        value={gender}
        onChangeText={setGender}
      /></View>

      <Text style={{fontWeight:'bold'}}>Password<Text style={{color:'red'}}>*</Text></Text>
      <View style={styles.inputContainer}>
      <Ionicons name="key-outline" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      /></View>

      <Text style={{fontWeight:'bold'}}>Confirm Password<Text style={{color:'red'}}>*</Text></Text>
      <View style={styles.inputContainer}>
      <Ionicons name="key-outline" size={20}  color={"#999898"} />
      <TextInput
        style={styles.input}
        placeholder="Confirm your password"
        value={conpassword}
        onChangeText={setConpassword}
        secureTextEntry={true}
      /></View>

      <Pressable style={styles.button} onPress={() => router.push('/hostelType')}>
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
           
    </View>
  </View>  
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems:'center',
    padding: 20,
    backgroundColor: '#e1eefc',
  },
  header:{
    
    marginBottom: 32,
    alignItems:'flex-start'
  },
  container:{
    flex: 1,
    width: 500,
    height: 500,
    backgroundColor: "#fff",
    marginHorizontal: 8,
    boxShadow:'0 6px 12px rgba(66, 65, 65, 0.15)',
    justifyContent: "center",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
        
  },
  input: {
    borderWidth: 0,
    borderColor: '#dddada',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    flex:1,
    paddingVertical: 12,
  paddingLeft: 8,
  
  },
  button: {
  backgroundColor: '#2321c4',
  padding: 12,
  borderRadius: 8,
  alignItems: 'center',
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
},
title:{
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color:'#191781',
  },
  subtitle:{
     fontSize: 16,
    color:'#585757',
    textAlign: 'center',
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
});
