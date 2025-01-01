import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get Started with Your Account</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BusinessDetails")}
      >
        <Text style={styles.buttonText}>Start with Business Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("LogIn")}
      >
        <Text style={styles.linkText}>Already have an account? Log In</Text>
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
  link: {
    marginTop: 20,
  },
  linkText: {
    color: "#4CAF50",
  },
});

export default SignUpPage;
