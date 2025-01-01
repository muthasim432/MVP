import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native"; // Import navigation hook

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home-outline" size={24} color="#FFF" />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Calendar")}>
        <Ionicons name="calendar-outline" size={24} color="#FFF" />
        <Text style={styles.footerText}>Calendar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate("Jobs", { initialTab: "Confirmed" })} // Pass initialTab parameter
      >
        <Ionicons name="checkmark-circle-outline" size={24} color="#FFF" />
        <Text style={styles.footerText}>Jobs</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate("Disputes", { initialTab: "Unresolved" })}>
        <Ionicons name="alert-circle-outline" size={24} color="#FFF" />
        <Text style={styles.footerText}>Disputes</Text>
      </TouchableOpacity>

     
      <TouchableOpacity
        style={styles.footerButton}
        onPress={() => navigation.navigate("Accounts")} // Navigate to Accounts page
      >
        <Ionicons name="person-outline" size={24} color="#FFF" />
        <Text style={styles.footerText}>Accounts</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "top",
    backgroundColor: "#1E2A52",
    paddingVertical: 15,
    height: 100,
    borderTopWidth: 1,
    borderTopColor: "#444",
  },
  footerButton: {
    alignItems: "center",
    flex: 1,
  },
  footerText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default Footer;
