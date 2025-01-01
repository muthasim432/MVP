import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"; // For icons

const Header = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Status Bar Background */}
      <StatusBar barStyle="light-content" backgroundColor="#0A0F2E" />

      {/* Header Content */}
      <View style={styles.headerContent}>
        <Text style={styles.companyName}>{title}</Text>
        <View style={styles.icons}>
          {/* Notification Icon */}
          <Ionicons name="notifications-outline" size={24} color="#FFF" />
          {/* Messenger Icon */}
          <Ionicons name="chatbubble-outline" size={24} color="#FFF" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#0A0F2E", // Match global background color
    paddingVertical: 15, // Add padding for visual clarity
    paddingTop: StatusBar.currentHeight || 60, // Add padding to avoid overlap with status bar
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  companyName: {
    fontSize: 26, // Slightly larger font size for better visibility
    fontWeight: "bold",
    color: "#FFF",
  },
  icons: {
    flexDirection: "row",
    gap: 15,
  },
});

export default Header;
