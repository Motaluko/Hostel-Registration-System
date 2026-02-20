import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function CardPayment() {
  return (
    <ScrollView style={styles.body}>
      {/* Header Section */}
      <View style={styles.container1}>
        <Text style={styles.head}>Select Payment Method</Text>

        {/*Payment methods*/}
        <View style={styles.toggleContainer}>
          <Link href="/CardPayment" asChild>
            <Pressable
              style={{ ...styles.toggleButton, ...styles.toggleActive }}
            >
              <Ionicons name="checkbox" size={20} color="#2321c4" />
              <Text style={styles.toggleTextActive}>
                <Ionicons name="card-outline" size={20} color="#2321c4" /> Card
                Payment
              </Text>
              <Text>Pay with debit/credit card</Text>
            </Pressable>
          </Link>
          <Link href="/TransferPayment" asChild>
            <Pressable
              style={{ ...styles.toggleButton, ...styles.toggleInActive }}
            >
              <Ionicons name="checkbox" size={20} color="#2321c4" />
              <Text style={styles.toggleTextActive}>
                <Ionicons
                  name="phone-portrait-outline"
                  size={20}
                  color="#21c473"
                />{" "}
                Bank Transfer
              </Text>
              <Text>Pay with debit/credit card</Text>
            </Pressable>
          </Link>
        </View>
      </View>
      {/*Bank Transfer Details*/}
      <View style={styles.container1}>
        <View style={styles.subText}>
          <Text style={{ ...styles.label1, ...styles.head }}>
            Bank Transfer Details{" "}
          </Text>
          <Text style={styles.value}>
            <Ionicons name="time-outline" size={20} color="red" />{" "}
            29:56(countdown)
          </Text>
        </View>
        <View style={styles.yellowBox}>
          <Text style={styles.yellowBoxText}>
            Note: Please compplete the transfer within 30 minutes. Your booking
            will be automatically cancelled if payement is not received.
          </Text>
        </View>

        <View style={styles.container}>
          <View style={{ flexDirection: "column" }}>
            <Text>Account Number</Text>
            <Text style={{ fontWeight: "bold" }}>1234567890</Text>
          </View>
          <Text style={{ color: "#2321c4" }}>
            <Ionicons name="copy" size={20} color="#2321c4" />
            Copy
          </Text>
        </View>
        <View style={styles.container2}>
          <Text>Account Name</Text>
          <Text style={{ fontWeight: "bold" }}>Hostel Room Selection</Text>
        </View>
        <View style={styles.container2}>
          <Text>Bank Name</Text>
          <Text style={{ fontWeight: "bold" }}>First Bank of Nigeria</Text>
        </View>
      </View>

      {/*Payment Summary Section */}
      <View style={styles.container1}>
        <Text style={styles.sectionTitle}>Payment Summary</Text>
        <View style={styles.subText}>
          <Text style={styles.label1}>Room Booking Fee </Text>
          <Text style={styles.value}>N0</Text>
        </View>
        <View style={styles.subText}>
          <Text style={styles.label1}>Service Charge </Text>
          <Text style={styles.value}>N0</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.subText}>
          <Text style={styles.label1}>Total Amount </Text>
          <Text style={styles.value}>N0</Text>
        </View>
      </View>

      {/*Navigation Buttons */}
      <View style={styles.toggleContainer}>
        <Link href="/classic" asChild>
          <Pressable
            style={{
              ...styles.BottomtoggleButton,
              ...styles.BottomtoggleActive,
            }}
          >
            <Text>
              <Ionicons name="arrow-back" size={16} color="black" /> Back
            </Text>
          </Pressable>
        </Link>
        <Link href="/CompletePayment" asChild>
          <Pressable
            style={{
              ...styles.BottomtoggleButton,
              ...styles.BottomtoggleInActive,
            }}
          >
            <Text>
              <Ionicons
                name="checkmark-circle-outline"
                size={16}
                color="white"
              />{" "}
              I have transferred
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e1eefc",
    padding: 16,
  },
  container1: {
    backgroundColor: "#fff",
    marginHorizontal: 8,
    justifyContent: "flex-start",
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#f1f6fa",
    flexDirection: "row",
    marginHorizontal: 8,
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },
  container2: {
    backgroundColor: "#f1f6fa",
    marginHorizontal: 8,
    justifyContent: "flex-start",
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
  },

  head: {
    color: "#0a0202",
    fontSize: 22,
    fontWeight: "bold",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  //-------Last form row----------
  LastFormRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 4,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "white",
  },
  expiryCvvRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 50,
  },
  column: {
    flex: 1,
  },
  // ── Toggle (Segmented control) ──
  toggleContainer: {
    flexDirection: "row",
    borderRadius: 50,
    padding: 4,
    marginBottom: 24,
    gap: 8,
  },
  toggleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  toggleActive: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  toggleInActive: {
    borderWidth: 1,
    borderColor: "#5078fa",
    backgroundColor: "#e1eefc",
  },
  toggleTextActive: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  // ── Form ──
  formContainer: {},

  label: {
    color: "#050000",
    fontSize: 15,
    marginBottom: 6,
    fontWeight: "500",
  },

  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f6fa",
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  currency: {
    color: "",
    fontSize: 18,
    marginRight: 8,
    fontWeight: "600",
  },

  input: {
    flex: 1,
    color: "white",
    fontSize: 17,
    paddingVertical: 14,
  },

  button: {
    backgroundColor: "#933DC9",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },

  // ── Recent Transactions ──
  sectionTitle: {
    color: "#010002",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  transactionsList: {
    backgroundColor: "#ccc",
    borderRadius: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },

  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderLeftWidth: 4,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#ccc",
  },

  transactionInfo: {
    flex: 1,
  },

  transactionTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  transactionDate: {
    color: "#a78bfa",
    fontSize: 13,
    marginTop: 2,
  },

  transactionValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: 12,
  },

  subText: {
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
    alignItems: "center",
  },
  BottomtoggleActive: {
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
  },
  BottomtoggleInActive: {
    backgroundColor: "#10c25a",
    color: "white",
  },
  yellowBox: {
    borderWidth: 1,
    borderColor: "#f3f038",
    backgroundColor: "#f9fcd2",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  yellowBoxText: {
    color: "#966f1d",
    fontSize: 12,
    fontWeight: "bold",
  },
});
