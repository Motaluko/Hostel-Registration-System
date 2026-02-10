import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


export default function HostelType(){
    return(
        <ScrollView style={styles.body}>
            {/*Select Your Room*/}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Select Your Room</Text>
                <Text style={styles.headerSubTitle}>Platinum Hall - 4 students per room</Text>

            </View>

            {/*Select Floor*/}
           <View style={styles.container1}>
            <Text>Select Floor</Text>
            <View style={styles.row}>
                <Pressable style={styles.button} onPress={() => console.log("Floor A pressed")}>
                    <Text>Floor A</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text>Floor B</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text>Floor C</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text>Floor D</Text>
                </Pressable>

            </View>

           </View>

             {/*Room Availability*/}
            <View style={styles.container1}>

             </View >

             {/*Floor A*/}
             <View style={styles.container1}>
                <Text>Floor A - Rooms(1-30)</Text>
                <View style={styles.rooms}> {/*Row 1*/}
                    <Pressable style={styles.box}>
                       <Text>1</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>2</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>3</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>4</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>5</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>6</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>7</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>8</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>9</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>10</Text>
                    </Pressable>
                </View>
                <View style={styles.rooms}> {/*Row 2*/}
                    <Pressable style={styles.box}>
                       <Text>11</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>12</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>13</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>14</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>15</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>16</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>17</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>18</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>19</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>20</Text>
                    </Pressable>
                </View>
                <View style={styles.rooms}> {/*Row 3*/}
                    <Pressable style={styles.box}>
                       <Text>21</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>23</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>23</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>24</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>25</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>26</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>27</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>28</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>29</Text>
                    </Pressable>
                    <Pressable style={styles.box}>
                       <Text>30</Text>
                    </Pressable>
                </View>

             </View>

             {/*Selected Room Details*/}
             <View style={styles.container1}>
                <Text> Selected Room Details</Text>
                <View style={styles.bottom1}>
                    <Text>Room Number</Text>
                    <Text>Floor</Text>
                    <Text>Occupancy</Text>
                    <Text>Status</Text>
                </View>
                <View style={styles.bottom2}>
                    <Text>Room Number</Text>
                    <Text>Floor</Text>
                    <Text>Occupancy</Text>
                    <Text>Status</Text>
                </View>

             </View>

             {/*Button */}
                     <Link href="/hostelType" asChild>
                        <Pressable
                          style={styles.button}>
                           <Text><Ionicons name="arrow-back" size={16} color="black" /> Back</Text>
                        </Pressable>
                     </Link>

        </ScrollView>
    );}

const styles = StyleSheet.create({
    body:{

    },
    header:{

    },
    headerTitle:{

    },
    headerSubTitle:{

    },
    container1:{
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
    row:{},
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
    rooms:{},
    box:{},
    bottom1:{},
    bottom2:{},
});