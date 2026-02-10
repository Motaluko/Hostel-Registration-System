import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function HostelType() {
  const types = [
    { title: "Classic", capacity: "4", perRoom: "4 students per room" },
    { title: "Premium", capacity: "5", perRoom: "5 students per room" },
    { title: "Regular", capacity: "6", perRoom: "6 students per room" },
  ];

  return (
    <ScrollView style={styles.body}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Hostel Type</Text>
      </View>

      {/* Cards in horizontal row */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsContainer}
      >
        {types.map((type, index) => (
          <Pressable
            key={type.title}
            style={styles.card}
            onPress={() => {
              // Add navigation here, e.g. router.push(`/hostels/${type.title.toLowerCase()}`)
              console.log(`Selected ${type.title}`);
            }}
          >
            {/* House emoji (replace with real images later) */}
            <Text style={styles.houseEmoji}>
              {index === 0 ? "🏠" : index === 1 ? "🏡" : "🏘️"}
            </Text>

            <Text style={styles.cardTitle}>{type.title}</Text>

            <View style={styles.capacityRow}>
              <Ionicons name="people-outline" size={24} color="#2321c4" />
              <Text style={styles.capacityNumber}>{type.capacity}</Text>
            </View>

            <Text style={styles.perRoom}>{type.perRoom}</Text>

            <View style={styles.divider} />

            <View style={styles.features}>
              {["Shared facilities", "Shared facilities", "Shared facilities"].map((item, i) => (
                <View key={i} style={styles.featureRow}>
                  <Text style={styles.check}>✓</Text>
                  <Text style={styles.featureText}>{item}</Text>
                </View>
              ))}
            </View>
          </Pressable>
        ))}
      </ScrollView>

      {/* Back Button */}
      <Link href=".." asChild>
        <Pressable style={styles.backButton}>
          <Text style={styles.backText}>Back</Text>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e1eefc",
  },
  header: {
    backgroundColor: "#2321c4", // your blue color
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  cardsContainer: {
    flexDirection: "row",
    alignItems: "center",      // makes cards same height
    paddingHorizontal: 16,
    paddingVertical: 24,
    gap: 16,                    // space between cards
  },
  card: {
    flex: 1,                    // share width equally
    minWidth: 260,              // prevent too narrow on small screens
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  houseEmoji: {
    fontSize: 70,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2321c4",
    marginBottom: 8,
  },
  capacityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  capacityNumber: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#2321c4",
    marginLeft: 8,
  },
  perRoom: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  divider: {
    width: "80%",
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 12,
  },
  features: {
    width: "100%",
    alignItems: "flex-start",
  },
  featureRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  check: {
    color: "#4CAF50",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  featureText: {
    fontSize: 14,
    color: "#333",
  },
  backButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignSelf: "center",
    marginVertical: 32,
  },
  backText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
});