import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions
} from "react-native";

export default function HostelType() {
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380; // breakpoint for very small screens

  return (
    <ScrollView style={styles.body}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Booking Confirmed!</Text>
        <Text style={{ color: '#cfcfcf', fontSize: 15 }}>
          Your hostel room has been successfully reserved
        </Text>
      </View>

      {/* Success message + icon */}
      <View style={{ alignItems: 'center', paddingVertical: 24 }}>
        <Ionicons 
          name="checkmark-circle-outline" 
          size={isSmallScreen ? 64 : 80} 
          color="green" 
        />
        <Text style={{ 
          fontSize: isSmallScreen ? 20 : 24, 
          fontWeight: 'bold', 
          marginTop: 16 
        }}>
          Booking Successful!
        </Text>
        <Text style={{ 
          textAlign: 'center', 
          color: '#666', 
          marginTop: 8, 
          paddingHorizontal: 24 
        }}>
          Your booking has been confirmed and saved
        </Text>
      </View>

      {/* Booking Details */}
      <View style={styles.container1}>
        <Text style={styles.head}>Booking Details</Text>

        <View style={styles.divider} />

        {/* Row 1 */}
        <View style={[
          styles.info, 
          isSmallScreen && { flexWrap: 'wrap', gap: 16 }
        ]}>
          <View style={styles.infoItem}>
            <Ionicons name="person-outline" size={20} color="blue" />
            <View style={{ marginLeft: 12 }}>
              <Text>Student Name</Text>
              <Text style={{ fontWeight: 'bold' }}>-</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="person-outline" size={20} color="blue" />
            <View style={{ marginLeft: 12 }}>
              <Text>Matric Number</Text>
              <Text style={{ fontWeight: 'bold' }}>-</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Row 2 */}
        <View style={[
          styles.info, 
          isSmallScreen && { flexWrap: 'wrap', gap: 16 }
        ]}>
          <View style={styles.infoItem}>
            <Ionicons name="home-outline" size={20} color="purple" />
            <View style={{ marginLeft: 12 }}>
              <Text>Hostel Name</Text>
              <Text style={{ fontWeight: 'bold' }}>-</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="bed-outline" size={20} color="purple" />
            <View style={{ marginLeft: 12 }}>
              <Text>Room Number</Text>
              <Text style={{ fontWeight: 'bold' }}>-</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Row 3 */}
        <View style={[
          styles.info, 
          isSmallScreen && { flexWrap: 'wrap', gap: 16 }
        ]}>
          <View style={styles.infoItem}>
            <Ionicons name="calendar-outline" size={20} color="orange" />
            <View style={{ marginLeft: 12 }}>
              <Text>Academic Session</Text>
              <Text style={{ fontWeight: 'bold' }}>-</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={20} color="orange" />
            <View style={{ marginLeft: 12 }}>
              <Text>Semester</Text>
              <Text style={{ fontWeight: 'bold' }}>-</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        {/* Row 4 */}
        <View style={[
          styles.info, 
          isSmallScreen && { flexWrap: 'wrap', gap: 16 }
        ]}>
          <View style={styles.infoItem}>
            <Ionicons name="card-outline" size={20} color="green" />
            <View style={{ marginLeft: 12 }}>
              <Text>Payment Method</Text>
              <Text style={{ fontWeight: 'bold' }}>-</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle-outline" size={20} color="green" />
            <View style={{ marginLeft: 12 }}>
              <Text>Booking Status</Text>
              <Text style={{ fontWeight: 'bold' }}>Confirmed</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />
      </View>

      {/* Receipt Sent */}
      <View style={styles.receipt}>
        <Ionicons name="mail" size={24} color="blue" />
        <View style={{ marginLeft: 16, flex: 1 }}>
          <Text style={styles.head}>Receipt Sent</Text>
          <Text style={{ color: '#444', lineHeight: 20 }}>
            A confirmation email with your booking details and receipt has been sent to your registered email address. Please check your inbox (and spam folder) for more information.
          </Text>
        </View>
      </View>

      {/* Important Notice */}
      <View style={styles.notice}>
        <Text style={styles.head}>Important Notice</Text>
        <Text style={{ color: '#444', marginTop: 8, lineHeight: 20 }}>
          • Please print or save a copy of this confirmation for your records{'\n'}
          • You will need to present this booking confirmation during check-in{'\n'}
          • Check-in will begin 2 weeks before the start of the semester{'\n'}
          • For any questions, contact the hostel management office
        </Text>
      </View>

      {/* Navigation Buttons */}
      <View style={styles.toggleContainer}>
        <Pressable
          style={{ ...styles.BottomtoggleButton, ...styles.BottomtoggleActive }}
        >
          <Text style={{ color: '#4c5df7', fontWeight: '600' }}>Print Receipt</Text>
        </Pressable>

        <Link href="/hostelType" asChild>
          <Pressable
            style={{ ...styles.BottomtoggleButton, ...styles.BottomtoggleInActive }}
          >
            <Text style={{ color: 'white', fontWeight: '600' }}>Back to Dashboard</Text>
          </Pressable>
        </Link>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={{ color: '#666', fontSize: 14 }}>Booking Reference</Text>
        <Text style={{ fontWeight: 'bold', color: '#333' }}>HRS-matricNum-year</Text>
      </View>

      {/* Extra bottom space */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f3f4f5',
  },
  header: {
    backgroundColor: "#11c054",
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    marginBottom: 16,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  container1: {
    backgroundColor: "#fff",
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#acf09f",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  head: {
    color: '#0a0202',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    minWidth: 140,
  },
  receipt: {
    borderColor: '#5078fa',
    backgroundColor: '#e1eefc',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  notice: {
    borderWidth: 1,
    borderColor: "#f3f038",
    backgroundColor: '#f9fcd2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  toggleContainer: {
    flexDirection: 'row',
    borderRadius: 50,
    padding: 4,
    marginBottom: 24,
    gap: 12,
    marginHorizontal: 12,
  },
  BottomtoggleButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomtoggleActive: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#4c5df7',
  },
  BottomtoggleInActive: {
    backgroundColor: '#4c5df7',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
});