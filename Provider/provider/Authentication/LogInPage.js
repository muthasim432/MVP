import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogInPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput placeholder="Phone Number" style={styles.input} placeholderTextColor="#aaa" />
      <TextInput placeholder="Password" style={styles.input} placeholderTextColor="#aaa" secureTextEntry />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")} // Navigate to Home without authentication
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate("SignUp")} // Navigate to SignUp
      >
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
    marginVertical: 10,
    backgroundColor: "#1E2A52",
    borderRadius: 5,
    color: "#FFF",
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

export default LogInPage;
