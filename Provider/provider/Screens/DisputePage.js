import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Ionicons from "react-native-vector-icons/Ionicons";

const DisputePage = ({ route }) => {
  const { initialTab = "Unresolved" } = route.params || {};
  const [activeTab, setActiveTab] = useState(initialTab);

  const disputesData = {
    Resolved: [
      { id: "1", title: "Resolved by Company", details: "Details about resolved dispute 1" },
      { id: "2", title: "Resolved by Company", details: "Details about resolved dispute 2" },
    ],
    Unresolved: [
      { id: "3", title: "Poor Service by Company", details: "Details about unresolved dispute 1" },
      { id: "4", title: "Late Pickup by Driver", details: "Details about unresolved dispute 2" },
    ],
  };

  const handleRaiseDispute = () => {
    alert("Raise Dispute feature will be implemented here.");
  };

  return (
    <View style={styles.container}>
      {/* Header with Title and Plus Icon */}
      <Header title="Company" />
      <View style={styles.headerRow}>
        <Text style={styles.pageTitle}>Dispute Box</Text>
        <TouchableOpacity onPress={handleRaiseDispute}>
          <Ionicons name="add-circle-outline" size={28} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Tabs and Dispute Details */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Tabs */}
        <View style={styles.tabs}>
          {["Resolved", "Unresolved"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tabButton}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
              {activeTab === tab && <View style={styles.activeTabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Dispute Details */}
        {disputesData[activeTab]?.length > 0 ? (
          disputesData[activeTab].map((dispute) => (
            <View key={dispute.id} style={styles.disputeCard}>
              <Text style={styles.disputeTitle}>{dispute.title}</Text>
              <Text style={styles.disputeDetails}>{dispute.details}</Text>
              <TouchableOpacity style={styles.viewButton}>
                <Text style={styles.buttonText}>View</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <Text style={styles.noDisputesText}>No disputes available in this category.</Text>
        )}
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0F2E",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#1E2A52",
    marginTop: 20,

  },
  pageTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 10,
    marginLeft:10,
    marginRight: 10,
    marginBottom: 10,

  },
  content: {
    padding: 20,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  tabButton: {
    alignItems: "center",
    flex: 1,
    paddingVertical: 10,
  },
  tabText: {
    color: "#FFF",
    fontSize: 16,
  },
  activeTabText: {
    fontWeight: "bold",
  },
  activeTabIndicator: {
    height: 2,
    backgroundColor: "#4CAF50",
    width: "100%",
    marginTop: 5,
  },
  disputeCard: {
    backgroundColor: "#1E2A52",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  disputeTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  disputeDetails: {
    color: "#AAA",
    fontSize: 14,
    marginBottom: 10,
  },
  viewButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  noDisputesText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default DisputePage;
