import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";

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
              <Text style={styles.headerTitle}>Select Hostel Type</Text>
              <Text style={{color:'#cfcfcf', fontSize:15}}>Choose the type of accomodation that suits you best</Text>
            </View>

      <View style={styles.container}>
      {/*Classic*/}
       <View style={styles.row}>
        <Link href="/classic" asChild>
          <Pressable style={styles.card} >
           <Text style={styles.houseEmoji}>🏘️</Text>
            <Text style={styles.name}>Classic</Text>
            <Text style={styles.num}><Ionicons name="people-outline" size={27}  color={"#2321c4"} style={{textAlign: 'center', marginTop: 10}}/> 4</Text>
            <Text style={styles.sub}>4 students per room</Text>
           
           <View  style={styles.hrContainer}> 
                <Text style={styles.hr}>___________________________________________</Text>
             </View>
        <View>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> 24/7 security</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Wi-Fi enabled</Text>
        </View>

          </Pressable>
        </Link>
        


            {/*Premium*/}
        <Link href="/premium" asChild>
          <Pressable style={styles.card}>
            <Text style={styles.houseEmoji}>🏡</Text>
            <Text style={styles.name}>Premium</Text>
            <Text style={styles.num}><Ionicons name="people-outline" size={27}  color={"#2321c4"} style={{textAlign: 'center', marginTop: 10}}/> 5</Text>
            <Text style={styles.sub}>5 students per room</Text>

             <View  style={styles.hrContainer}> 
                <Text style={styles.hr}>___________________________________________</Text>
             </View>
        <View>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> 24/7 security</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Wi-Fi enabled</Text>
        </View>

          </Pressable>
        </Link>
       

        {/*Regular*/}
        <Link href="/regular" asChild>  
          <Pressable style={styles.card}>
            <Text style={styles.houseEmoji}>🏠</Text>
            <Text style={styles.name}>Regular</Text>
            <Text style={styles.num}><Ionicons name="people-outline" size={27}  color={"#2321c4"} style={{textAlign: 'center', marginTop: 10}}/> 6</Text>
            <Text style={styles.sub}>6 students per room</Text>

             <View style={styles.hrContainer}> 
                <Text style={styles.hr}>___________________________________________</Text>
             </View>
        <View>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> 24/7 security</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Wi-Fi enabled</Text>
        </View>

          </Pressable>
        </Link>
       
      </View>
        {/*Button */}
        <Link href="/" asChild>
           <Pressable
             style={styles.button}>
              <Text><Ionicons name="arrow-back" size={20} color="#020208" /> Back</Text>
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
    backgroundColor: "#2321c4", 
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
    num:{
        fontSize: 32,
    fontWeight: "bold",
    color: "#2321c4",
    },
    sub:{
        fontSize: 14,
    color: "#777",
    textAlign: "center"
    },
    button:{
        borderWidth: 1,
        borderColor: "#ccc",
        backgroundColor: "#fff",
        paddingVertical: 14,
        paddingHorizontal: 40,
        borderRadius: 12,
        marginTop: 24,
       
    },
   row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap:16,
    marginVertical: 20,
  },
  card: {
    maxWidth: 360,
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
  name: {
    marginTop: 6,
    fontWeight: "bold",
    color: "#333",
  },
  icon: {
    marginVertical: 6,
  },
  hr:{
    color:'#ccc',
    padding:10,
  },
   hrContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 8,
  },
})