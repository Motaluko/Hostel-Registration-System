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
        <Link href="/classic" asChild>
          <Pressable style={styles.card} >
            <Image source={require("../assets/images/classic1.png")} style={styles.image} />
            <Text style={styles.name}>Classic</Text>
            <Text style={styles.num}><Ionicons name="people-outline" size={27}  color={"#2321c4"} style={{textAlign: 'center', marginTop: 10}}/> 4</Text>
            <Text style={styles.sub}>4 students per room</Text>
           
           <View > 
                <Text style={styles.hr}>___________________________________________</Text>
             </View>
        <View>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
        </View>

          </Pressable>
        </Link>
        


            {/*Premium*/}
        <Link href="/premium" asChild>
          <Pressable style={styles.card}>
            <Image source={require("../assets/images/premium1.png")} style={styles.image} />
            <Text style={styles.name}>Premium</Text>
            <Text style={styles.num}><Ionicons name="people-outline" size={27}  color={"#2321c4"} style={{textAlign: 'center', marginTop: 10}}/> 5</Text>
            <Text style={styles.sub}>5 students per room</Text>

             <View > 
                <Text style={styles.hr}>___________________________________________</Text>
             </View>
        <View>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
        </View>

          </Pressable>
        </Link>
       

        {/*Regular*/}
        <Link href="/regular" asChild>  
          <Pressable style={styles.card}>
            <Image source={require("../assets/images/regular1.png")} style={styles.image} />
            <Text style={styles.name}>Regular</Text>
            <Text style={styles.num}><Ionicons name="people-outline" size={27}  color={"#2321c4"} style={{textAlign: 'center', marginTop: 10}}/> 6</Text>
            <Text style={styles.sub}>6 students per room</Text>

             <View > 
                <Text style={styles.hr}>___________________________________________</Text>
             </View>
        <View>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
            <Text style={{color:'#a39f9f'}}><Ionicons name="checkmark-outline" size={20}  color={"#0bb845"} /> Shared facilities</Text>
        </View>

          </Pressable>
        </Link>
       
      </View>
        {/*Button */}
        <Link href="/" asChild>
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
    fontWeight: "bold",
    color: "#333",
  },
  icon: {
    marginVertical: 6,
  },
  hr:{
    color:'#ccc',
    padding:10,
  }

})