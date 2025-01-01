import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars"; // Optional calendar library for advanced features
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const CalendarPage = () => {
  const [monthlyOverview, setMonthlyOverview] = useState({
    totalJobs: 13,
    weeklyJobs: 3,
    freeDays: 3,
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header title="Company" />

      {/* Calendar Section */}
      <ScrollView contentContainerStyle={styles.calendarContainer}>
        {/* Monthly Overview */}
        <View style={styles.overviewGrid}>
          <View style={styles.overviewBoxSquare}>
            <Text style={styles.overviewText}>Total Jobs</Text>
            <Text style={styles.overviewValue}>{monthlyOverview.totalJobs}</Text>
          </View>
          <View style={styles.overviewBoxSquare}>
            <Text style={styles.overviewText}>Weekly Jobs</Text>
            <Text style={styles.overviewValue}>{monthlyOverview.weeklyJobs}</Text>
          </View>
          <View style={styles.overviewBoxSquare}>
            <Text style={styles.overviewText}>Free Days</Text>
            <Text style={styles.overviewValue}>{monthlyOverview.freeDays}</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Monthly Schedule</Text>
        <Calendar
          style={styles.calendar}
          theme={{
            calendarBackground: "#1E2A52",
            dayTextColor: "#FFF",
            todayTextColor: "#4CAF50",
            arrowColor: "#FFF",
            monthTextColor: "#FFF",
          }}
          markedDates={{
            "2024-12-20": { selected: true, marked: true, selectedColor: "#4CAF50" },
            "2024-12-29": { selected: true, marked: true, selectedColor: "#4CAF50" },
          }}
        />

        <View style={styles.taskList}>
          <Text style={styles.taskDate}>20 December 2024</Text>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>John Smith Wedding</Text>
            <Text style={styles.taskTime}>1:30 PM - 2:30 PM</Text>
          </View>
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>Client Meeting</Text>
            <Text style={styles.taskTime}>3:00 PM - 4:00 PM</Text>
          </View>
        </View>
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
  calendarContainer: {
    padding: 20,
  },
  overviewGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  overviewBoxSquare: {
    backgroundColor: "#1E2A52",
    width: "30%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },
  overviewText: {
    color: "#FFF",
    fontSize: 14,
    marginBottom: 5,
    textAlign: "center",
  },
  overviewValue: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 10,
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 20,
  },
  taskList: {
    backgroundColor: "#1E2A52",
    borderRadius: 10,
    padding: 15,
  },
  taskDate: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  taskText: {
    color: "#FFF",
    fontSize: 14,
  },
  taskTime: {
    color: "#AAA",
    fontSize: 14,
  },
});

export default CalendarPage;
