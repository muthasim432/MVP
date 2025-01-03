import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import sharedStyles from "./sharedStyles";

const ConfirmSignupPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.title}>Account Verified!</Text>
        <Text style={styles.subTitle}>You can now use the app.</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("LoginPage")}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ...sharedStyles,
});

export default ConfirmSignupPage;
