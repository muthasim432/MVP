import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import sharedStyles from "./sharedStyles";

const LoginPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState(""); // Added password state
  const [otp, setOtp] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleLogin = () => {
    if (!phoneNumber || !password) {
      alert("Please enter your phone number and password.");
      return;
    }
    // Logic to authenticate with phone number and password
    alert("Login credentials verified. Sending OTP...");
    setVerificationSent(true);
  };

  const handleVerifyOtp = () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }
    // Logic to verify the OTP
    alert("Login successful!");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Welcome Back</Text>

        {/* Phone Number Input */}
        <TextInput
          placeholder="Enter Phone Number"
          placeholderTextColor="#AAA"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
          style={styles.input}
        />

        {/* Password Input */}
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="#AAA"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Masks the password input
          style={styles.input}
        />

        {verificationSent && (
          <TextInput
            placeholder="Enter OTP"
            placeholderTextColor="#AAA"
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            style={styles.input}
          />
        )}

        {!verificationSent ? (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("SignupPage")}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...sharedStyles,
});

export default LoginPage;
