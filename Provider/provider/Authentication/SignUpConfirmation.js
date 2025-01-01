import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpConfirmation = ({ route }) => {
  const { businessName, industry, fullName, phone, password } = route.params;
  const relationshipNumber = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit unique number
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Step 3: Confirm Your Details</Text>
      <Text style={styles.detailText}>Business Name: {businessName}</Text>
      <Text style={styles.detailText}>Industry: {industry}</Text>
      <Text style={styles.detailText}>Full Name: {fullName}</Text>
      <Text style={styles.detailText}>Phone: {phone}</Text>
      <Text style={styles.detailText}>Password: {password}</Text>
      <Text style={styles.detailText}>Relationship Number: {relationshipNumber}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert("Account successfully created!");
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.buttonText}>Finish</Text>
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
  detailText: {
    color: "#FFF",
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: "80%",
    padding: 15,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SignUpConfirmation;
