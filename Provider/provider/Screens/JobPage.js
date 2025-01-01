import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const JobPage = ({ route }) => {
  // Retrieve initialTab parameter or default to "New"
  const { initialTab = "New" } = route.params || {};
  const [activeTab, setActiveTab] = useState(initialTab);

  const dummyData = {
    New: [
      { id: "1", title: "Limo Centre", service: "Limousine Service", details: "New Job Details 1" },
      { id: "2", title: "Limo Centre", service: "Limousine Service", details: "New Job Details 2" },
    ],
    Confirmed: [
      { id: "3", title: "Limo Centre", service: "Confirmed Service", details: "Confirmed Job Details 1" },
      { id: "4", title: "Limo Centre", service: "Confirmed Service", details: "Confirmed Job Details 2" },
    ],
    Completed: [
      { id: "5", title: "Limo Centre", service: "Completed Service", details: "Completed Job Details 1" },
      { id: "6", title: "Limo Centre", service: "Completed Service", details: "Completed Job Details 2" },
    ],
  };

  useEffect(() => {
    // Update active tab when initialTab changes
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <View style={styles.container}>
      <Header title="Job Requests" />
      <ScrollView contentContainerStyle={styles.content}>
        {/* Tabs */}
        <View style={styles.tabs}>
          {["New", "Confirmed", "Completed"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tabButton}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeTabIndicator} />}
            </TouchableOpacity>
          ))}
        </View>

        {/* Job Details for the Active Tab */}
        {dummyData[activeTab].length > 0 ? (
          dummyData[activeTab].map((job) => (
            <View key={job.id} style={styles.jobCard}>
              <Text style={styles.jobTitle}>{job.title}</Text>
              <Text style={styles.jobService}>{job.service}</Text>
              <Text style={styles.jobDetails}>{job.details}</Text>
              <View style={styles.jobActions}>
                <TouchableOpacity style={styles.messageButton}>
                  <Text style={styles.buttonText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.requestQuoteButton}>
                  <Text style={styles.buttonText}>Request Quote</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noJobsText}>No jobs available in this category.</Text>
        )}
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
  content: {
    padding: 20,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#444", // Subtle border line
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
  jobCard: {
    backgroundColor: "#1E2A52",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  jobTitle: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  jobService: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 5,
  },
  jobDetails: {
    color: "#AAA",
    fontSize: 14,
    marginBottom: 15,
  },
  jobActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  messageButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  requestQuoteButton: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  noJobsText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});

export default JobPage;
