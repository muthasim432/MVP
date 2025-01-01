import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Ionicons from "react-native-vector-icons/Ionicons";

const AccountPage = () => {
  const handleNavigation = (page) => {
    alert(`Navigate to ${page} page!`);
  };

  const handleUploadPhoto = () => {
    alert("Upload Photo functionality will be added later!");
  };

  return (
    <View style={styles.container}>
      <Header title="John Smith" />

      {/* Profile Picture Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Placeholder image
          style={styles.profilePicture}
        />
        <TouchableOpacity style={styles.uploadButton} onPress={handleUploadPhoto}>
          <Ionicons name="camera-outline" size={20} color="#FFF" />
          <Text style={styles.uploadText}>Upload Photo</Text>
        </TouchableOpacity>
      </View>

      {/* Account Summary */}
      <View style={styles.accountSummary}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>3</Text>
          <Text style={styles.summaryLabel}>Likes</Text>
        </View>
        <View style={[styles.summaryItem, styles.centralSummaryItem]}>
          <Text style={styles.summaryValue}>15</Text>
          <Text style={styles.summaryLabel}>Served</Text>
        </View>

        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>2</Text>
          <Text style={styles.summaryLabel}>Loyals</Text>
        </View>
        
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>2</Text>
          <Text style={styles.summaryLabel}>Issues Faced</Text>
        </View>

        
        
      </View>

      {/* Body Content */}
      <ScrollView contentContainerStyle={styles.body}>
        {/* Features Section */}
        <View style={styles.featuresRow}>
          <TouchableOpacity style={styles.featureButton} onPress={() => handleNavigation("Help Center")}>
            <Ionicons name="help-circle-outline" size={28} color="#FFF" />
            <Text style={styles.featureText}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureButton} onPress={() => handleNavigation("Earnings Wallet")}>
            <Ionicons name="wallet-outline" size={28} color="#FFF" />
            <Text style={styles.featureText}>Earnings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.featureButton} onPress={() => handleNavigation("Job History")}>
            <Ionicons name="time-outline" size={28} color="#FFF" />
            <Text style={styles.featureText}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Highlighted Features */}
        <TouchableOpacity style={styles.highlightCard}>
          <View style={styles.highlightRow}>
            <Ionicons name="car-outline" size={24} color="#FFF" />
            <Text style={styles.highlightTitle}>Promote Your Services</Text>
          </View>
          <Text style={styles.highlightDescription}>
            Use our platform to boost your service visibility. Limited-time offer.{" "}
            <Text style={styles.linkText}>See more</Text>
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.highlightCard}>
          <View style={styles.highlightRow}>
            <Ionicons name="shield-outline" size={24} color="#FFF" />
            <Text style={styles.highlightTitle}>Privacy Settings</Text>
          </View>
          <Text style={styles.highlightDescription}>
            Update and control who sees your service details and availability.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.highlightCard}>
          <View style={styles.highlightRow}>
            <Ionicons name="alert-outline" size={24} color="#FFF" />
            <Text style={styles.highlightTitle}>Safety Tips</Text>
          </View>
          <Text style={styles.highlightDescription}>
            For your security, avoid sharing sensitive information.{" "}
            <Text style={styles.linkText}>Learn more</Text>
          </Text>
        </TouchableOpacity>
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
  profileSection: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  uploadButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#2196F3",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  uploadText: {
    color: "#FFF",
    fontSize: 14,
    marginLeft: 5,
  },
  accountSummary: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Aligns items vertically
    paddingHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  summaryItem: {
    alignItems: "center",
    flex: 1,
  },
  centralSummaryItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  summaryValue: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  summaryLabel: {
    color: "#AAA",
    fontSize: 14,
    textAlign: "center",
  },
  body: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  featuresRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  featureButton: {
    alignItems: "center",
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#1E2A52",
    borderRadius: 10,
  },
  featureText: {
    color: "#FFF",
    fontSize: 14,
    marginTop: 5,
  },
  highlightCard: {
    backgroundColor: "#1E2A52",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  highlightRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  highlightTitle: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
  },
  highlightDescription: {
    color: "#AAA",
    fontSize: 14,
  },
  linkText: {
    color: "#4CAF50",
  },
});

export default AccountPage;
