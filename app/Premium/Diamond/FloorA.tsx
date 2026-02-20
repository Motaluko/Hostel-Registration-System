import { Ionicons } from "@expo/vector-icons";
import { Link, type Href } from "expo-router";
import React, { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
} from "react-native";

type Room = {
  number: string;
  occupancy: string; // "0/5", "1/5", etc.
  status: "empty" | "partial" | "full";
};

export default function HostelType() {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 400;

  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState<string | null>(
    null,
  );

  const [occupancies, setOccupancies] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (let i = 1; i <= 30; i++) {
      initial[i.toString()] = "0/5";
    }
    return initial;
  });

  const getStatus = (occ: string): Room["status"] => {
    if (occ === "0/5") return "empty";
    if (occ === "5/5") return "full";
    return "partial";
  };

  const getRoomBoxStyle = (status: Room["status"]) => {
    switch (status) {
      case "empty":
        return styles.roomBoxEmpty;
      case "partial":
        return styles.roomBoxPartial;
      case "full":
        return styles.roomBoxFull;
      default:
        return styles.roomBoxEmpty;
    }
  };

  const getStatusText = (status: Room["status"]) => {
    switch (status) {
      case "empty":
        return "Available";
      case "partial":
        return "Partially Full";
      case "full":
        return "Full";
      default:
        return "-";
    }
  };

  const handleRoomPress = (roomNumber: string) => {
    setSelectedRoomNumber(roomNumber);

    setOccupancies((prev) => {
      const current = prev[roomNumber] || "0/5";
      const [taken] = current.split("/").map(Number);
      const nextTaken = taken >= 5 ? 0 : taken + 1;
      return { ...prev, [roomNumber]: `${nextTaken}/5` };
    });
  };

  const selectedOccupancy = selectedRoomNumber
    ? occupancies[selectedRoomNumber]
    : null;
  const selectedStatus = selectedOccupancy
    ? getStatus(selectedOccupancy)
    : null;

  return (
    <ScrollView style={styles.body}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select Your Room</Text>
        <Text style={styles.headerSubtitle}>
          Diamond Hall - 5 students per room
        </Text>
      </View>

      {/* Select Floor */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Select Floor</Text>

        <View style={[styles.floorRow, isSmallScreen && { gap: 12 }]}>
          {["A", "B", "C", "D"].map((floor) => (
            <Link
              key={floor}
              href={`/Premium/Diamond/Floor${floor}` as Href}
              asChild
            >
              <Pressable
                style={{
                  ...styles.floorButton,
                  ...(selectedFloor === floor && styles.floorButtonSelected),
                }}
                onPress={() => setSelectedFloor(floor)}
              >
                <Text
                  style={{
                    ...styles.floorButtonText,
                    ...(selectedFloor === floor &&
                      styles.floorButtonTextSelected),
                  }}
                >
                  Floor {floor}
                </Text>
              </Pressable>
            </Link>
          ))}
        </View>
      </View>

      {/* Room Availability Legend */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Room Availability</Text>
        <View style={styles.colorCode}>
          <View style={styles.legendItem}>
            <Ionicons name="square" size={16} color="#05b339" />
            <Text style={styles.legendText}> Available (Empty)</Text>
          </View>
          <View style={styles.legendItem}>
            <Ionicons name="square" size={16} color="#f5b800" />
            <Text style={styles.legendText}> Partially Full</Text>
          </View>
          <View style={styles.legendItem}>
            <Ionicons name="square" size={16} color="#9b9797" />
            <Text style={styles.legendText}> Full</Text>
          </View>
        </View>
      </View>

      {/* Floor A Rooms */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Floor A- Rooms (1-30)</Text>

        <View style={styles.roomsGrid}>
          {Array.from({ length: 30 }, (_, i) => {
            const num = (i + 1).toString();
            const occ = occupancies[num] || "0/5";
            const status = getStatus(occ);

            return (
              <Pressable
                key={num}
                style={[
                  styles.roomBox,
                  getRoomBoxStyle(status),
                  selectedRoomNumber === num && styles.roomBoxSelected,
                ]}
                onPress={() => handleRoomPress(num)}
              >
                <Text style={styles.roomNumber}>{num}</Text>
                <View style={styles.occupancyRow}>
                  <Ionicons name="people-outline" size={16} color="white" />
                  <Text style={styles.occupancyText}>{occ}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </View>

      {/* Selected Room Details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Selected Room Details</Text>

        {selectedRoomNumber && selectedOccupancy && selectedStatus ? (
          <View style={styles.detailsGrid}>
            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Room Number</Text>
              <Text style={styles.detailValue}>{selectedRoomNumber}</Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Occupancy</Text>
              <Text style={styles.detailValue}>{selectedOccupancy}</Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Floor</Text>
              <Text style={styles.detailValue}>
                {selectedFloor ? `Floor ${selectedFloor}` : "Not selected"}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailLabel}>Status</Text>
              <View
                style={{
                  ...styles.statusBox,
                  ...(selectedStatus === "empty" && styles.statusAvailable),
                  ...(selectedStatus === "partial" && styles.statusPartial),
                  ...(selectedStatus === "full" && styles.statusFull),
                }}
              >
                <Text style={styles.statusBoxText}>
                  {getStatusText(selectedStatus)}
                </Text>
              </View>
            </View>
          </View>
        ) : (
          <Text style={styles.noSelectionText}>Tap a room to select it</Text>
        )}
      </View>

      {/* Bottom Buttons */}
      <View style={styles.buttonRow}>
        <Link href="/premium" asChild>
          <Pressable
            style={{
              ...styles.actionButton,
              ...styles.backButton,
            }}
          >
            <Ionicons name="arrow-back" size={18} color="#333" />
            <Text style={styles.backButtonText}> Back</Text>
          </Pressable>
        </Link>

        <Link href="/CardPayment" asChild>
          <Pressable
            style={{
              ...styles.actionButton,
              ...styles.nextButton,
              ...(!selectedRoomNumber && styles.nextButtonDisabled),
            }}
            disabled={!selectedRoomNumber}
          >
            <Text style={styles.nextButtonText}>
              Next <Ionicons name="arrow-forward" size={18} color="white" />
            </Text>
          </Pressable>
        </Link>
      </View>

      <View style={{ height: 60 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#e1eefc",
  },
  header: {
    backgroundColor: "#2321c4",
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  headerTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "700",
  },
  headerSubtitle: {
    color: "#e0e0ff",
    fontSize: 15,
    marginTop: 6,
  },
  card: {
    backgroundColor: "#ffffff",
    marginHorizontal: 12,
    marginVertical: 8,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
    color: "#111",
  },
  floorRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  floorButton: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d0d0d0",
    backgroundColor: "#fff",
    minWidth: 100,
    alignItems: "center",
  },
  floorButtonSelected: {
    borderColor: "#4f9be2",
    backgroundColor: "#e6f3ff",
  },
  floorButtonText: {
    fontSize: 16,
    color: "#444",
  },
  floorButtonTextSelected: {
    fontWeight: "600",
    color: "#1e60aa",
  },
  colorCode: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  legendText: {
    fontSize: 14,
    color: "#555",
  },
  roomsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    justifyContent: "space-evenly",
  },
  roomBox: {
    width: 68,
    height: 68,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
  },
  roomBoxEmpty: {
    backgroundColor: "#05b339",
    borderColor: "#046822",
  },
  roomBoxPartial: {
    backgroundColor: "#f5b800",
    borderColor: "#c79800",
  },
  roomBoxFull: {
    backgroundColor: "#9b9797",
    borderColor: "#777777",
  },
  roomBoxSelected: {
    borderWidth: 3.5,
    borderColor: "#2563eb",
    elevation: 6,
    shadowColor: "#2563eb",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
  roomNumber: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  occupancyRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    marginTop: 4,
  },
  occupancyText: {
    color: "white",
    fontSize: 13,
    fontWeight: "500",
  },
  detailsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
    justifyContent: "space-between",
  },
  detailItem: {
    flex: 1,
    minWidth: 120,
  },
  detailLabel: {
    color: "#666",
    fontSize: 14,
  },
  detailValue: {
    fontSize: 17,
    fontWeight: "600",
    color: "#111",
    marginTop: 4,
  },
  statusBox: {
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 6,
    alignSelf: "flex-start",
  },
  statusAvailable: {
    backgroundColor: "#e6ffe6",
    borderWidth: 1,
    borderColor: "#a3e4a3",
  },
  statusPartial: {
    backgroundColor: "#fff3e0",
    borderWidth: 1,
    borderColor: "#ffca9c",
  },
  statusFull: {
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#d0d0d0",
  },
  statusBoxText: {
    fontSize: 13,
    fontWeight: "600",
  },
  noSelectionText: {
    color: "#888",
    textAlign: "center",
    padding: 16,
    fontSize: 15,
  },
  buttonRow: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
  },
  backButton: {
    backgroundColor: "#f0f0f0",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  backButtonText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  nextButton: {
    backgroundColor: "#2321c4",
  },
  nextButtonDisabled: {
    backgroundColor: "#a0a0ff",
    opacity: 0.7,
  },
  nextButtonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "600",
  },
});
