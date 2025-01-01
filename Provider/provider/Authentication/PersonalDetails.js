import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PersonalDetails = ({ route }) => {
  const { businessName, industry } = route.params;
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleNext = () => {
    if (!fullName || !phone || !password) {
      alert("Please fill out all fields.");
      return;
    }
    navigation.navigate("SignUpConfirmation", { businessName, industry, fullName, phone, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 2: Personal Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor="#AAA"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#AAA"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#AAA"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
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

export default PersonalDetails;
