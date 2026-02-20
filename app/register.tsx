import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [matric_number, setMatric_number] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConpassword] = useState("");

  const router = useRouter();
  const { width } = useWindowDimensions();

  // Responsive container width: 90% on phones, max ~480–520 px on larger screens
  const isSmallScreen = width < 400;
  const containerWidth = Math.min(width * 0.92, 500);
  const sidePadding = isSmallScreen ? 16 : 24;

  const handleRegister = () => {
    // Replace with real auth later
    if (
      !firstname ||
      !password ||
      !middlename ||
      !lastname ||
      !matric_number ||
      !gender ||
      !conpassword
    ) {
      Alert.alert("Error", "Please fill in the fields");
      return;
    }
    router.push("/hostelType");
  };

  const handleSubmit = () => {
    Alert.alert(
      "Form Submitted",
      `Firstname: ${firstname}\nMiddlename: ${middlename}\nLastname: ${lastname}\nMatric Number: ${matric_number}\nGender: ${gender}\nPassword: ${password}\nConfirm Password: ${conpassword}`,
    );
  };

  return (
    <SafeAreaView style={styles.body}>
      <ScrollView
        contentContainerStyle={[
          styles.scrollContent,
          { paddingHorizontal: sidePadding },
        ]}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[styles.container, { width: containerWidth }]}>
          <View style={styles.header}>
            <Pressable onPress={() => router.push("/")}>
              <Text style={styles.title}>
                <Ionicons name="arrow-back" size={24} color="#2321c4" />{" "}
                Register
              </Text>
            </Pressable>
            <Text style={styles.subtitle}>
              Create your HRS account to book a hostel room
            </Text>
          </View>

          <Text style={styles.label}>
            First Name <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#999898" />
            <TextInput
              style={styles.input}
              placeholder="Jane"
              value={firstname}
              onChangeText={setFirstname}
              autoCapitalize="words"
            />
          </View>

          <Text style={styles.label}>
            Middle Name <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#999898" />
            <TextInput
              style={styles.input}
              placeholder="Alison"
              value={middlename}
              onChangeText={setMiddlename}
              autoCapitalize="words"
            />
          </View>

          <Text style={styles.label}>
            Last Name <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#999898" />
            <TextInput
              style={styles.input}
              placeholder="Doe"
              value={lastname}
              onChangeText={setLastname}
              autoCapitalize="words"
            />
          </View>

          <Text style={styles.label}>
            Matric Number <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons name="card-outline" size={20} color="#999898" />
            <TextInput
              style={styles.input}
              placeholder="22/0118"
              value={matric_number}
              onChangeText={setMatric_number}
              autoCapitalize="characters"
              maxLength={7}
            />
          </View>

          <Text style={styles.label}>
            Gender <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons name="male-female" size={20} color="#999898" />
            <TextInput
              style={styles.input}
              placeholder="Male / Female"
              value={gender}
              onChangeText={setGender}
              autoCapitalize="words"
            />
          </View>

          <Text style={styles.label}>
            Password <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} color="#999898" />
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>

          <Text style={styles.label}>
            Confirm Password <Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} color="#999898" />
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              value={conpassword}
              onChangeText={setConpassword}
              secureTextEntry
            />
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
            onPress={() => {
              handleSubmit();
              handleRegister();
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </View>

        {/* Extra bottom space so last field isn't hidden by keyboard */}
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e1eefc",
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
  },

  container: {
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#abc2f3",
    padding: 24,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },

  header: {
    marginBottom: 32,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#191781",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: "#585757",
  },

  label: {
    fontWeight: "bold",
    marginBottom: 6,
    fontSize: 15,
  },

  required: {
    color: "red",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fafafa",
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },

  input: {
    flex: 1,
    paddingVertical: 14,
    paddingLeft: 10,
    fontSize: 16,
    color: "#333",
  },

  button: {
    backgroundColor: "#2321c4",
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonPressed: {
    opacity: 0.88,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});
