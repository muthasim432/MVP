import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import sharedStyles from "./sharedStyles";

const SignupPage = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleSendOtp = () => {
    setVerificationSent(true);
    alert("OTP sent to your phone!");
  };

  const handleVerifyOtp = () => {
    alert("Phone number verified!");
    navigation.navigate("ConfirmSignupPage");
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Create an Account</Text>

        <TextInput
          placeholder="Enter Phone Number"
          placeholderTextColor="#AAA"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
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
          <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
            <Text style={styles.buttonText}>Send OTP</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleVerifyOtp}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => navigation.navigate("LoginPage")}>
          <Text style={styles.linkText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...sharedStyles,
});

export default SignupPage;
