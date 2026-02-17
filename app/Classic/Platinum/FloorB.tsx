import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";

export default function HostelType(){
  {/*Inside component:*/ } 
const { width } = useWindowDimensions();

const cardStyle = {
  ...styles.card,
  width: width < 600 ? '100%' : '45%',   // or '30%' for 3 columns
  fontSize: width < 400 ? 18 : 22, // Adjust font size based on screen width
};
    return(
        
    <ScrollView style={styles.body}>
      {/* Header */}
                  <View style={styles.header}>
                    <Text style={styles.headerTitle}>Select Your Hostel Type </Text>
                    <Text style={{color:'#cfcfcf', fontSize:15}}>Available Hostel for students</Text>
                  </View>
      <View style={styles.container}>
      
      {/*Platinum*/}
       <View style={styles.row}>
        <Link href="/Classic/Platinum/FloorA" asChild>
          <Pressable style={styles.card} >
            <Text style={styles.houseEmoji}>🏘️</Text>
            <Text style={styles.name}>Platinum Hall</Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Classic</Text>
            </View>
           
           <View  style={styles.hrContainer}> 
                <Text style={styles.hr}>_______________________________________________________</Text>
             </View>
         
        <View style={styles.subText}>
            <Text style={styles.label}>Capacity: </Text>
            <Text style={styles.value}>4 students/room</Text>
        </View>
        <View style={styles.subText} >
            <Text style={styles.label}>Gender: </Text>
            <Text style={styles.value}>Female</Text>
        </View>
        <View style={styles.subText}>
            <Ionicons name="location" size={16}  color="#585757" /> 
            <Text style={styles.value}> Main Campus </Text>
        </View>
        <View style={styles.hrContainer}> 
                <Text style={styles.hr}>_______________________________________________________</Text>
        </View>
        <View style={styles.subText} >
            <Text style={styles.label}>Availabilty: </Text>
            <View style={styles.box1}>
                <Text style={styles.boxText1}>Available</Text>
            </View>
        </View>
          </Pressable>
        </Link>
        


            {/*Crystal*/}
        <Link href="/Classic/Crystal/FloorA" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.houseEmoji}>🏘️</Text>
            <Text style={styles.name}>Crystal Hall</Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Classic</Text>
            </View>

             <View style={styles.hrContainer}> 
                <Text style={styles.hr}>_______________________________________________________</Text>
             </View>
        <View style={styles.subText}>
            <Text style={styles.label}>Capacity: </Text>
            <Text style={styles.value}>4 students/room</Text>
        </View>
        <View style={styles.subText} >
            <Text style={styles.label}>Gender: </Text>
            <Text style={styles.value}>Female</Text>
        </View>
        <View style={styles.subText}>
            <Ionicons name="location" size={16}  color="#585757" /> 
            <Text style={styles.value}> Main Campus </Text>
        </View>
        <View style={styles.hrContainer}> 
                <Text style={styles.hr}>_______________________________________________________</Text>
        </View>
        <View style={styles.subText} >
            <Text style={styles.label}>Availabilty: </Text>
            <View style={styles.box1}>
                <Text style={styles.boxText1}>Available</Text>
            </View>
        </View>
          </Pressable>
        </Link>
       

        {/*Saphhire*/}
        <Link href="/Classic/Sapphire/FloorA" asChild>  
          <Pressable style={styles.card}>
           <Text style={styles.houseEmoji}>🏘️</Text>
            <Text style={styles.name}>Saphhire Hall</Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Classic</Text>
            </View>
             <View style={styles.hrContainer}> 
                <Text style={styles.hr}>_______________________________________________________</Text>
             </View>
        <View style={styles.subText}>
            <Text style={styles.label}>Capacity: </Text>
            <Text style={styles.value}>4 students/room</Text>
        </View>
        <View style={styles.subText} >
            <Text style={styles.label}>Gender: </Text>
            <Text style={styles.value}>Female</Text>
        </View>
        <View style={styles.subText}>
            <Ionicons name="location" size={16}  color="#585757" /> 
            <Text style={styles.value}> Main Campus </Text>
        </View>
        <View style={styles.hrContainer}> 
                <Text style={styles.hr}>_______________________________________________________</Text>
        </View>
        <View style={styles.subText} >
            <Text style={styles.label}>Availabilty: </Text>
            <View style={styles.box1}>
                <Text style={styles.boxText1}>Available</Text>
            </View>
        </View>
          </Pressable>
        </Link>
       
      </View>
        {/*Button */}
        <Link href="/hostelType" asChild>
           <Pressable
             style={styles.button}>
              <Text><Ionicons name="arrow-back" size={16} color="black" /> Back</Text>
           </Pressable>
        </Link>
      </View>
       
    </ScrollView>
    );
}


const styles = StyleSheet.create({
    body:{
        flex: 1,
        backgroundColor: "#e1eefc"
    },
    container:{
        flex: 1,
        padding: 16,
        alignItems: "center",
        
    },
    header: {
    backgroundColor: "#2321c4", // your blue color
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
    row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap:16,
    marginVertical: 20,
  },
    num:{
       fontSize: 32,
       fontWeight: "bold",
       color: "#2321c4",
    },
    card: {
    maxWidth:360,
    minWidth:300,  
    width: "100%",
    height: 500,
    backgroundColor: "#fff",
    marginHorizontal: 8,
    alignItems: "center",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    },
     houseEmoji: {
    fontSize: 70,
    marginBottom: 16,
  },
    image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 12,
    },
    name: {
    marginBottom: 6,
    fontWeight: "bold",
    fontSize:18,
    color: "#333",
    },
    box:{
     borderWidth: 1,
     borderColor: "#b5d1fa",
     backgroundColor:'#b5d1fa',
     borderRadius: 8,
     paddingVertical:6,
     paddingHorizontal: 12,
     marginBottom: 12,
    },
    boxText:{
      color:'#2321c4',
      fontSize:12,
      fontWeight: "bold",
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
  label: {
    color: "#585757",
    fontSize: 14,
  },
  value: {
    fontWeight: "bold",
    color: "#333",
    fontSize: 14,
  },
  box1:{
     borderWidth: 1,
     borderColor: "#b5fada",
     backgroundColor:'#b5fada',
     borderRadius: 8,
     padding: 8,
     marginVertical: 10,
  },
  boxText1:{
    color:'#0c9c48',
    fontSize:12,
    fontWeight: "bold",
  },  
  button:{
      borderWidth: 1,
      borderColor: "#ccc",
      backgroundColor: "#fff",
      paddingVertical: 14,
      paddingHorizontal: 40,
      borderRadius: 12,
      marginTop: 24,
      marginBottom: 32,
    },

})