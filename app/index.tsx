import { Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 380;

  const [matric_number, setMatric_number] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleLogin = () => {
    // Replace with real auth later
    if (!matric_number || !password) {
      Alert.alert("Error", "Please enter matric number and password");
      return;
    }
    router.push("/hostelType");
  };

  // Dynamic card width: max 420px, min 85% on small screens
  const cardWidth = Math.min(420, width * 0.88);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={[styles.body, { paddingHorizontal: isSmallScreen ? 16 : 24 }]}
      >
        <View style={[styles.container, { width: cardWidth }]}>
          {/* Header / icon + Title */}
          <View style={styles.header}>
            <Ionicons
              name="home-outline"
              size={isSmallScreen ? 32 : 40}
              color="#2321c4"
              style={{ marginBottom: 8 }}
            />
            <Text style={[styles.title, isSmallScreen && { fontSize: 20 }]}>
              Welcome to HRS
            </Text>
            <Text style={[styles.subtitle, isSmallScreen && { fontSize: 14 }]}>
              Hostel Room Selection System
            </Text>
          </View>

          {/* Form */}
          <View style={styles.form}>
            <Text style={styles.label}>Matric Number</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="person-outline" size={20} color="#666" />
              <TextInput
                style={[styles.input, isSmallScreen && { fontSize: 15 }]}
                placeholder="Enter your matric number"
                placeholderTextColor="#999"
                value={matric_number}
                onChangeText={setMatric_number}
                autoCapitalize="none"
                autoCorrect={false}
                maxLength={7}
              />
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color="#666" />
              <TextInput
                style={[styles.input, isSmallScreen && { fontSize: 15 }]}
                placeholder="Enter your password"
                placeholderTextColor="#999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
              />
            </View>

            {/* Login button */}
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Link href="/register" asChild>
              <Text style={styles.registerLink}>
                Don't have an account?{" "}
                <Text style={styles.registerLinkBold}>Register here</Text>
              </Text>
            </Link>
          </View>

          <View style={styles.bottom}>
            <Text style={styles.bottomText}>Secure • Safe • Reliable</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e1eefc",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: "#d0e0ff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 6,
  },
  header: {
    alignItems: "center",
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#2321c4",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: "#666",
    textAlign: "center",
  },
  form: {
    width: "100%",
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f9fc",
    borderWidth: 1,
    borderColor: "#f8f9fc",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 16,
    height: 52,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    paddingVertical: 0,
    marginLeft: 8,
  },
  button: {
    backgroundColor: "#2321c4",
    height: 52,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
  },
  buttonPressed: {
    opacity: 0.88,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  registerLink: {
    textAlign: "center",
    color: "#555",
    fontSize: 14,
  },
  registerLinkBold: {
    color: "#2321c4",
    fontWeight: "600",
  },
  bottom: {
    alignItems: "center",
    marginTop: 12,
  },
  bottomText: {
    color: "#aaa",
    fontSize: 13,
  },
});
