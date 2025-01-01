import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BusinessDetails = () => {
  const navigation = useNavigation();
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");

  const handleNext = () => {
    if (!businessName || !industry) {
      alert("Please fill out all fields.");
      return;
    }
    navigation.navigate("PersonalDetails", { businessName, industry });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 1: Business Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Business Name"
        placeholderTextColor="#AAA"
        value={businessName}
        onChangeText={setBusinessName}
      />
      <TextInput
        style={styles.input}
        placeholder="Industry (e.g., Cleaning Service)"
        placeholderTextColor="#AAA"
        value={industry}
        onChangeText={setIndustry}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0F2E",
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    backgroundColor: "#1E2A52",
    color: "#FFF",
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BusinessDetails;
