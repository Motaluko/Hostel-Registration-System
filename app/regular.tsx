import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HostelType(){
    return(
        
      
    <ScrollView style={styles.body}>
      <View style={styles.container}>
      
      {/*Classic*/}
       <View style={styles.row}>
        <Link href="/Regular/Nyberg/FloorA" asChild>
          <Pressable style={styles.card} >
            <Image source={require("../assets/images/regular1.png")} style={styles.image} />
            <Text style={styles.name}>Nyberg Hall</Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Regular</Text>
            </View>
           
           <View > 
                <Text style={styles.hr}>_______________________________________________________</Text>
             </View>
         
        <View style={styles.subText}>
            <Text style={{color:'#585757'}}>Capacity: </Text>
            <Text style={{fontWeight:'bold'}}>6 students/room</Text>
        </View>
        <View style={styles.subText1} >
            <Text style={{color:'#585757'}}>Gender: </Text>
            <Text style={{fontWeight:'bold'}}>Male</Text>
        </View>
        <View style={styles.subText2}>
            <Text style={{color:'#585757'}}><Ionicons name="location" size={16}  color={"#585757"} style={{textAlign: 'center', marginTop: 10}}/>  Main Campus </Text>
        </View>
        <View > 
                <Text style={styles.hr}>_______________________________________________________</Text>
        </View>
        <View style={styles.subTextAv} >
            <Text style={{color:'#585757'}}>Availabilty: </Text>
            <View style={styles.box1}>
                <Text style={styles.boxText1}>Available</Text>
            </View>
        </View>
          </Pressable>
        </Link>
        


            {/*Premium*/}
        <Link href="/Regular/Ogden/FloorA" asChild>
          <Pressable style={styles.card}>
            <Image source={require("../assets/images/regular1.png")} style={styles.image} />
            <Text style={styles.name}>Ogden Hall</Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Regular</Text>
            </View>

             <View > 
                <Text style={styles.hr}>_______________________________________________________</Text>
             </View>
        <View style={styles.subText}>
            <Text style={{color:'#585757'}}>Capacity: </Text>
            <Text style={{fontWeight:'bold'}}>6 students/room</Text>
        </View>
        <View style={styles.subText1} >
            <Text style={{color:'#585757'}}>Gender: </Text>
            <Text style={{fontWeight:'bold'}}>Male</Text>
        </View>
        <View style={styles.subText2}>
            <Text style={{color:'#585757'}}><Ionicons name="location" size={16}  color={"#585757"} style={{textAlign: 'center', marginTop: 10}}/>  Main Campus </Text>
        </View>
        <View > 
                <Text style={styles.hr}>_______________________________________________________</Text>
        </View>
        <View style={styles.subTextAv} >
            <Text style={{color:'#585757'}}>Availabilty: </Text>
            <View style={styles.box1}>
                <Text style={styles.boxText1}>Available</Text>
            </View>
        </View>
          </Pressable>
        </Link>
       

        {/*Regular*/}
        <Link href="/Regular/White/FloorA" asChild>  
          <Pressable style={styles.card}>
            <Image source={require("../assets/images/regular1.png")} style={styles.image} />
            <Text style={styles.name}>White Hall</Text>
            <View style={styles.box}>
                <Text style={styles.boxText}>Regular</Text>
            </View>
             <View > 
                <Text style={styles.hr}>_______________________________________________________</Text>
             </View>
        <View style={styles.subText}>
            <Text style={{color:'#585757'}}>Capacity: </Text>
            <Text style={{fontWeight:'bold'}}>6 students/room</Text>
        </View>
        <View style={styles.subText1} >
            <Text style={{color:'#585757'}}>Gender: </Text>
            <Text style={{fontWeight:'bold'}}>Male</Text>
        </View>
        <View style={styles.subText2}>
            <Text style={{color:'#585757'}}><Ionicons name="location" size={16}  color={"#585757"} style={{textAlign: 'center', marginTop: 10}}/>  Main Campus </Text>
        </View>
        <View > 
                <Text style={styles.hr}>_______________________________________________________</Text>
        </View>
        <View style={styles.subTextAv} >
            <Text style={{color:'#585757'}}>Availabilty: </Text>
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
              <Text> Back</Text>
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
        paddingHorizontal: 32,
        borderRadius: 12,
        marginTop: 16,
    },
   row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap:20,
    marginVertical: 20,
  },
  card: {
    flex: 1,
    width: 400,
    height: 500,
    backgroundColor: "#fff",
    marginHorizontal: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
        
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 35,
  },
  name: {
    marginTop: 6,
    padding:8,
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
  box:{
     borderWidth: 1,
     borderColor: "#b5d1fa",
     backgroundColor:'#b5d1fa',
     borderRadius: 8,
     padding: 8,
     marginVertical: 10,
  },
  boxText:{
    color:'#2321c4',
    fontSize:12,
    fontWeight: "bold",
  },
  subText:{
    flexDirection: "row",
    gap: 155,
     marginTop: 8,
     color:'#a39f9f',
  },
  subText1:{
    flexDirection: "row",
    gap: 240,
     marginTop: 8,
     color:'#a39f9f',
  },
  subText2:{
    flexDirection: "row",
    alignSelf:'flex-start',
    marginLeft: 22,
    marginTop: 8,
    color:'#a39f9f',
  },
  subTextAv:{
    flexDirection: "row",
    gap: 190,
     marginTop: 8,
     color:'#a39f9f',
  },
   boxText1:{
    color:'#0c9c48',
    fontSize:12,
    fontWeight: "bold",
  },  
  box1:{
     borderWidth: 1,
     borderColor: "#b5fada",
     backgroundColor:'#b5fada',
     borderRadius: 8,
     padding: 8,
     marginVertical: 10,
  },
})