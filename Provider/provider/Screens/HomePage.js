import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const HomePage = () => {
  const navigation = useNavigation(); // Navigation hook

  const newJobRequests = [
    { id: "1", cost: "$0.00", service: "Limousine Service", details: "Details about the service..." },
    { id: "2", cost: "$0.00", service: "Limousine Service", details: "Details about the service..." },
    { id: "3", cost: "$0.00", service: "Taxi Service", details: "Details about the service..." },
    { id: "4", cost: "$0.00", service: "Shuttle Service", details: "Details about the service..." },
    { id: "5", cost: "$0.00", service: "Courier Service", details: "Details about the service..." },
  ];

  const today = new Date();
  const dayIndex = today.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

  return (
    <View style={styles.container}>
      <Header title="Company" />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Up Next Section */}
        <View style={styles.upNext}>
          <Text style={styles.sectionHeaderTitle}>Up Next</Text>
          <View style={styles.upNextCard}>
            <Text style={styles.upNextText}>Fri, 27 Dec</Text>
            <Text style={styles.upNextText}>5:15 PM - 9:15 PM</Text>
            <Text style={styles.upNextSubText}>Checkout @ Prahran Grocer</Text>
            <Text style={styles.upNextSubText}>4.17 hrs | $128.25</Text>
          </View>
        </View>

        {/* Roster Section */}
        <View style={styles.roster}>
          <Text style={styles.sectionHeaderTitle}>Appointment Overview</Text>
          <View style={styles.rosterRow}>
            {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
              <View
                key={index}
                style={[
                  styles.rosterDot,
                  index === dayIndex && styles.activeDot, // Highlight today's dot
                ]}
              >
                <Text style={styles.dayText}>{day}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Job Requests Section */}
        <View style={styles.newJobRequests}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>New Job Requests</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Jobs", { initialTab: "New" })}>
              <Text style={styles.seeAllButton}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.jobRequestContainer}>
            {newJobRequests.map((item) => (
              <View style={styles.jobCardWide} key={item.id}>
                <Text style={styles.jobText}>Cost: {item.cost}</Text>
                <Text style={styles.jobText}>Service: {item.service}</Text>
                <Text style={styles.jobText}>Details: {item.details}</Text>
                <View style={styles.jobActionsWide}>
                  <TouchableOpacity style={styles.respondButtonWide}>
                    <Text style={styles.buttonText}>Respond</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.viewDetailsButtonWide}>
                    <Text style={styles.buttonText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Profile Summary Section */}
        <View style={styles.profileSummary}>
          <Text style={styles.sectionTitle}>Profile Summary</Text>
          <View style={styles.summaryRow}>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryText}>New Jobs</Text>
              <Text style={styles.summaryValue}>3</Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryText}>Completed Jobs</Text>
              <Text style={styles.summaryValue}>3</Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryText}>Due Jobs</Text>
              <Text style={styles.summaryValue}>3</Text>
            </View>
          </View>
          <View style={styles.summaryRow}>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryText}>Total Earnings</Text>
              <Text style={styles.summaryValue}>$100.00</Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryText}>Reviews</Text>
              <Text style={styles.summaryValue}>10</Text>
            </View>
            <View style={styles.summaryBox}>
              <Text style={styles.summaryText}>Transactions</Text>
              <Text style={styles.summaryValue}>10</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0F2E",
  },
  contentContainer: {
    padding: 10,
    flexGrow: 1, // Ensures consistent spacing
    justifyContent: "space-between", // Spreads content evenly
  },
  sectionHeaderTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  profileSummary: {
    marginBottom: 20,
    marginTop: 20,
  },
  sectionHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  seeAllButton: {
    fontSize: 14,
    color: "#4CAF50",
    fontWeight: "bold",
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  summaryBox: {
    backgroundColor: "#1E2A52",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  summaryText: {
    color: "#FFF",
    fontSize: 12,
  },
  summaryValue: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  newJobRequests: {
    marginBottom: 20,
  },
  jobRequestContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  jobCardWide: {
    backgroundColor: "#1E2A52",
    padding: 20,
    borderRadius: 10,
    marginRight: 15, // Spacing between cards
    width: width / 1.5, // Adjust width for wider cards
    alignItems: "center", // Center content horizontally
  },
  jobText: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 8,
  },
  jobActionsWide: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    width: "100%",
  },
  respondButtonWide: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginRight: 10, // Add spacing between Respond and View Details
    alignItems: "center",
  },
  viewDetailsButtonWide: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  upNext: {
    marginVertical: 20,
  },
  upNextCard: {
    backgroundColor: "#1E2A52",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  upNextText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  upNextSubText: {
    color: "#AAA",
    fontSize: 14,
  },
  roster: {
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#1E2A52",
  },
  rosterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  rosterDot: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#555",
    alignItems: "center",
    justifyContent: "center",
  },
  activeDot: {
    backgroundColor: "#4CAF50",
  },
  dayText: {
    color: "#FFF",
    fontWeight: "bold",
  },
});

export default HomePage;
