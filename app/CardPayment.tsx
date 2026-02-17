import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native';


export default function CardPayment() {
  
  const {width}= useWindowDimensions();
  const isVerySmallScreen = width < 360;
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = () => {
    Alert.alert('Form Submitted', `Cardholder Name: ${name}\nCard Number: ${cardNumber}\nExpiry Date: ${expiryDate}\nCVV: ${cvv}`);
  };

  return (
    <ScrollView style={styles.body}>
      {/* Header Section */}
      <View style={styles.container1}>
        <Text style={styles.head}>
           Select Payment Method
        </Text>
      
      {/*Payment methods*/}
        <View style={styles.toggleContainer}>
          <Pressable style={{...styles.toggleButton, ...styles.toggleInActive}}>
            <Ionicons name="checkbox" size={20} color="#2321c4" />
            <Text style={styles.toggleTextActive}><Ionicons name="card-outline" size={20} color="#2321c4" />  Card Payment</Text>
            <Text>Pay with debit/credit card</Text>
          </Pressable>
          <Link href="/TransferPayment" asChild>
          <Pressable style={{...styles.toggleButton, ...styles.toggleActive}}>
            <Ionicons name="checkbox" size={20} color="#2321c4" />
            <Text style={styles.toggleTextActive}><Ionicons name="phone-portrait-outline" size={20} color="#21c473" />  Bank Transfer</Text>
            <Text>Pay with debit/credit card</Text>
          </Pressable>
          </Link>
        </View>
     </View>
        {/* Form Inputs */}
         <View style={styles.container1}>
          <Text style={styles.head}>Card Details</Text>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Cardholder Name</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Name on Card"
              placeholderTextColor="#888"
              value={name}
              onChangeText={setName}
             
            />
          </View>

          <Text style={styles.label}>Card Number</Text>
          <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="1234 5678 9012 4356"
            placeholderTextColor="#888"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType='numeric'
          />
         </View> 

         <View style={styles.LastFormRow}>
  {/* Row container for side-by-side fields */}
  <View style={styles.expiryCvvRow}>
    {/* Expiry Date column */}
    <View style={styles.column}>
      <Text style={styles.label}>Expiry Date</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          placeholderTextColor="#888"
          value={expiryDate}
          onChangeText={setExpiryDate}
          keyboardType="numeric"
          maxLength={5}           // Helps prevent typing too many digits
        />
      </View>
    </View>

    {/* CVV column */}
    <View style={styles.column}>
      <Text style={styles.label}>CVV</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="123"
          placeholderTextColor="#888"
          value={cvv}
          onChangeText={setCvv}
          keyboardType="numeric"
          maxLength={4}
          secureTextEntry       // Hides input for security (dots instead of numbers)
        />
      </View>
    </View>
  </View>
</View>
        </View>
      </View> 
    
      {/*Payment Summary Section */}
      <View style={styles.container1}>
      <Text style={styles.sectionTitle}>Payment Summary</Text>
      <View style={styles.subText}>
                  <Text style={styles.label1}>Room Booking Fee </Text>
                  <Text style={styles.value}>N0</Text>
              </View>
              <View style={styles.subText} >
                  <Text style={styles.label1}>Service Charge </Text>
                  <Text style={styles.value}>N0</Text>
              </View>    
              <View  style={styles.hrContainer}> 
                    <Text style={styles.hr}>________________________________________________________________________________________________</Text>
               </View>
                <View style={styles.subText} >
                  <Text style={styles.label1}>Total Amount </Text>
                  <Text style={styles.value}>N0</Text>
              </View> 

      </View>

      {/*Navigation Buttons */}
                   <View style={styles.toggleContainer}>
                           <Link href="/classic" asChild>
                              <Pressable
                                style={{...styles.BottomtoggleButton, ...styles.BottomtoggleActive}}>
                                 <Text><Ionicons name="arrow-back" size={16} color="black" /> Back</Text>
                              </Pressable> 
                              </Link>
                              <Link href="/CompletePayment" asChild>
                              <Pressable
                                style={{...styles.BottomtoggleButton, ...styles.BottomtoggleInActive}}>
                                 <Text><Ionicons name="checkmark-circle-outline" size={16} color="black" /> Pay Now</Text>
                              </Pressable>
                              </Link>
                   </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#e1eefc', // deep dark purple/navy
    padding: 16,
  },
  container1:{
        backgroundColor: "#fff",
        marginHorizontal: 8,
        justifyContent: "flex-start",
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom:20,
    },

  head: {
    color: '#0a0202',
    fontSize: 22,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  //-------Last form row----------
  LastFormRow: {
    flexDirection:'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'white',
  },
  expiryCvvRow: {
    flexDirection: 'row',           // ← Makes children go side by side
    justifyContent: 'space-between', // Spreads them with space in between
    gap:20,
    width:'100%',
  },
  column:{
    flex:1,
    minWidth: 140
  },
  // ── Toggle (Segmented control) ──
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 50,
    padding: 4,
    marginBottom: 24,
    gap: 8
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  toggleActive: {
    backgroundColor: 'white', 
    borderWidth:1,
    borderColor:'#ccc'
  },
  toggleTextActive: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toggleInActive:{
    borderWidth:1,
    borderColor:'#5078fa',
    backgroundColor:'#e1eefc'
  },

  // ── Form ──
  formContainer: {},

  label: {
    color: '#050000',
    fontSize: 15,
    marginBottom: 6,
    fontWeight: '500',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f6fa',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#f1f6fa',
  },

  currency: {
    color: '',
    fontSize: 18,
    marginRight: 8,
    fontWeight: '600',
  },

  input: {
    flex: 1,
    color: 'white',
    fontSize: 17,
    paddingVertical: 14,
  },

  button: {
    backgroundColor: '#933DC9',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  // ── Recent Transactions ──
  sectionTitle: {
    color: '#010002',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  transactionsList: {
    backgroundColor: '#ccc',
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },

  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderLeftWidth: 4,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#ccc',
  },

  transactionInfo: {
    flex: 1,
  },

  transactionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  transactionDate: {
    color: '#a78bfa',
    fontSize: 13,
    marginTop: 2,
  },

  transactionValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
   hr:{
    color:'#ccc',
    fontSize:10,
  },
  hrContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 8,
  },
  
  subText:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 4,
  },
  label1: {
    color: "#585757",
    fontSize: 14,
  },
  value: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 14,
  },
  // ----Buttom Buttons
   BottomtoggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  BottomtoggleActive: {
   borderWidth:1,
   borderColor:'#ccc',
   backgroundColor:'#ccc'
   
  },
  BottomtoggleInActive: {
    backgroundColor: '#10c25a',
    color:'white'
  },
});