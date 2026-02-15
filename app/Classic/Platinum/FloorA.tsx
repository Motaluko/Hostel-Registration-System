import { Ionicons } from '@expo/vector-icons';
import { Link, type Href } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


export default function HostelType(){

   const [selectedFloor, setSelectedFloor] = useState<string | null>(null);

    return(
        <ScrollView style={styles.body}>
             {/* Header */}
                <View style={styles.header}>
                     <Text style={styles.headerTitle}>Select Your Room </Text>
                     <Text style={{color:'#cfcfcf', fontSize:15}}>Platinum Hall - 4 students per room</Text>
                </View>

            {/*Select Floor*/}
           <View style={styles.container1}>
            <Text style={styles.text}>Select Floor</Text>
           
<View style={styles.row}>
  {['A', 'B', 'C', 'D'].map((floor) => (
    <Link
  href={`/Classic/Platinum/Floor${floor}` as Href}
  asChild
  key={floor}
  style={[
    styles.button,
    selectedFloor === floor && styles.buttonSelected,
  ]}
>
  <Pressable
    style={({ pressed }) =>
      pressed ? styles.buttonPressed : {}   // only handle pressed here
    }
    onPress={() => {
      setSelectedFloor(floor);
      // navigation happens automatically via Link
    }}
  >
    <Text style={selectedFloor === floor ? styles.selectedText : undefined}>
      Floor {floor}
    </Text>
  </Pressable>
</Link>
  ))}
</View>
           </View>

             {/*Room Availability*/}
            <View style={styles.container1}>
               <Text style={styles.text}> Room Availabilty</Text>
               <View style={styles.colorCode}>
                  <Text><Ionicons name="square" size={16} color="green" /> Available(Empty)</Text>
                  <Text><Ionicons name="square" size={16} color="#f0940a" /> Partially Full</Text>
                  <Text><Ionicons name="square" size={16} color="#9b9797" /> Full</Text>
               </View>
             </View >


             {/*Floor A*/}
             <View style={styles.container1}>
                <Text style={styles.text}>Floor A - Rooms(1-30)</Text>
                <View style={styles.rooms}> {/*Row 1*/}
                    <Pressable style={styles.box}>
                       <Text>1</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>2</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>3</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>4</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>5</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>6</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>7</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>8</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>9</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>10</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                </View>
                <View style={styles.rooms}> {/*Row 2*/}
                    <Pressable style={styles.box}>
                       <Text>11</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>12</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>13</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>14</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>15</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>16</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>17</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>18</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>19</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>20</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                </View>
                <View style={styles.rooms}> {/*Row 3*/}
                    <Pressable style={styles.box}>
                       <Text>21</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>22</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>23</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>24</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>25</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>26</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>27</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>28</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>29</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>30</Text>
                       <Text style={{color:'white',fontSize:14}}><Ionicons name="people-outline" size={16} color="white" /> 0/4</Text>
                    </Pressable>
                </View>

             </View>

             {/*Selected Room Details*/}
             <View style={styles.container1}>
                <Text style={styles.text}> Selected Room Details</Text>
                <View style={styles.bottom1}>
                <View>
                    <Text>Room Number</Text>
                    <Text style={{color:'#2321c4',fontWeight:'bold'}}>-</Text>
               </View> 
               <View>
                    <Text>Occupancy</Text>
                    <Text style={{fontWeight:'bold'}}>-</Text>
                </View>
                <View >
                    <Text>Floor</Text>
                    <Text style={{fontWeight:'bold'}}>-</Text>
                </View>
                <View>
                    <Text>Status</Text>
                    <View style={styles.statusBox}>
                           <Text style={styles.statusBoxText}>-</Text>
                     </View>
                </View>
                </View>
             </View>

             {/*Buttons */}
             <View style={styles.toggleContainer}>
                     <Link href="/classic" asChild>
                        <Pressable
                          style={[styles.toggleButton, styles.toggleActive]}>
                           <Text><Ionicons name="arrow-back" size={16} color="black" /> Back</Text>
                        </Pressable> 
                        </Link>
                        <Link href="/CardPayment" asChild>
                        <Pressable
                          style={[styles.toggleButton, styles.toggleInActive]}>
                           <Text><Ionicons name="arrow-forward" size={16} color="black" /> Next</Text>
                        </Pressable>
                        </Link>
             </View>

        </ScrollView>
    );}

const styles = StyleSheet.create({
    body:{
      flex:1,
      backgroundColor: '#e1eefc',

    },
   header: {
    backgroundColor: "#2321c4", 
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    marginBottom: 20,
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
    container1:{
        backgroundColor: "#fff",
        marginHorizontal: 8,
        boxShadow:'0 6px 12px rgba(66, 65, 65, 0.15)',
        justifyContent: "center",
        borderRadius: 16,
        padding: 20,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom:20,
    },
    colorCode:{
      flexDirection:'row',
      padding:10,
      gap:20
    },
    bottom1:{
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
    justifyContent: 'center', 
    alignItems: 'flex-start',
    flexDirection:'row' ,
    paddingVertical: 10,
    opacity: 1,
    gap: 20
  },
  text:{
   fontWeight: 'bold',
  },
    row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap:20,
    marginVertical: 20,
    justifyContent: 'flex-start',
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
    buttonPressed:{ 
      borderWidth:1,
      borderColor: '#4f9be2',
      backgroundColor: '#e1eefc',
    },
    buttonSelected:{
      borderWidth:1,
      borderColor: '#4f9be2',
      backgroundColor: '#e1eefc',
    },
    selectedText:{
      color:'black',
      fontWeight:'bold'
    },
    rooms:{
      flexDirection:'row',
      gap: 8,
      marginBottom: 8,
      borderRadius: 10,
      flexWrap: 'wrap',
      justifyContent: 'center',

    },
    box: {
      width: 80,
      height: 80,
      borderWidth:1,
      borderRadius: 8,
      borderColor:'#046822',
      backgroundColor: '#05b339',
      justifyContent: 'center', 
      alignItems: 'center'
   },
   statusBox:{
     borderWidth: 1,
     borderColor: "#f5fab5",
     backgroundColor:'#f5fab5',
     borderRadius: 8,
     paddingVertical:6,
     paddingHorizontal: 12,
     marginBottom: 12,
    },
    statusBoxText:{
      color:'#9ba13a',
      fontSize:12,
      fontWeight: "bold",
    },
   toggleContainer: {
    flexDirection: 'row',
    borderRadius: 50,
    padding: 4,
    marginBottom: 24,
    justifyContent:'space-between'
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    
  },
  toggleActive: {
   borderWidth:1,
   
  },
  toggleInActive: {
    backgroundColor: '#2321c4',
    color:'white'
  },
});