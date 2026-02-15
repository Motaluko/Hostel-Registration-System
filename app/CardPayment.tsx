import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function CardPayment() {
  
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
          <Pressable style={[styles.toggleButton, styles.toggleActive]}>
            <Ionicons name="checkbox" size={20} color="#2321c4" />
            <Text style={styles.toggleTextActive}><Ionicons name="card-outline" size={20} color="#2321c4" />  Card Payment</Text>
            <Text>Pay with debit/credit card</Text>
          </Pressable>
          <Link href="/TransferPayment" asChild>
          <Pressable style={[styles.toggleButton, styles.toggleActive]}>
            <Ionicons name="checkbox" size={20} color="#2321c4" />
            <Text style={styles.toggleTextActive}><Ionicons name="phone-portrait-outline" size={20} color="#21c473" />  Bank Transfer</Text>
            <Text>Pay with debit/credit card</Text>
          </Pressable>
          </Link>
        </View>
     </View>
        {/* Form Inputs */}
         <View style={styles.container1}>
          <Text>Card Details</Text>
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
          <Text style={styles.label}>Expiry Date</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="MM/YY"
              placeholderTextColor="#888"
              value={expiryDate}
              onChangeText={setExpiryDate}
              keyboardType="numeric"
            />

            <Text style={styles.label}>CVV</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="123"
              placeholderTextColor="#888"
              value={cvv}
              onChangeText={setCvv}
              keyboardType="numeric"
            />
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
                    <Text style={styles.hr}>_______________________________________________________</Text>
               </View>
                <View style={styles.subText} >
                  <Text style={styles.label1}>Total Amount </Text>
                  <Text style={styles.value}>N0</Text>
              </View> 

      </View>

      {/* Navigation Buttons */}
      <View style={styles.toggleContainer}>
                           <Link href="/classic" asChild>
                              <Pressable
                                style={[styles.ButtomtoggleButton, styles.ButtomtoggleActive]}>
                                 <Text><Ionicons name="arrow-back" size={16} color="black" /> Back</Text>
                              </Pressable>
                              </Link>
                              <Link href="/CompletePayment" asChild>
                              <Pressable
                                style={[styles.ButtomtoggleButton, styles.ButtomtoggleInActive]}>
                                 <Text><Ionicons name="checkmark-circle-outline" size={16} color="white" /> Pay Now</Text>
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
    color: '#e9d5ff',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  LastFormRow: {
    backgroundColor: '#1a0835',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#3a1a5e',
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
    backgroundColor: '#ef4444', // red for Spent
  },
  toggleInactive: {
    borderColor: '#c084fc',
    borderWidth:1,

    // no background → transparent / uses container bg
  },
  toggleTextActive: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  toggleTextInactive: {
    color: '#c4b5fd',
    fontSize: 16,

  },

  // ── Form ──
  formContainer: {},

  label: {
    color: '#d1d5db',
    fontSize: 15,
    marginBottom: 6,
    fontWeight: '500',
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#220a55',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#4a2a7a',
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
    color: '#e9d5ff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  transactionsList: {
    backgroundColor: '#1a0835',
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: '#3a1a5e',
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
    backgroundColor: '#220a55',
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
   ButtomtoggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  ButtomtoggleActive: {
   borderWidth:1,
   
  },
  ButtomtoggleInActive: {
    backgroundColor: '#2321c4',
    color:'white'
  },
});