import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style'; // Base styles from style.js

const WelcomeScreen = ({ navigation }) => {
  return (

    <View style={[styles.background, localStyles.background]}>

  <View style={styles.companyName}>
    {/* Logo or Image */}
    <Image source={require('../assets/favicon.png')}
            style={styles.logo}/>
     <Text style={[styles.title, localStyles.title, localStyles.name]}>ServiceHub</Text>
  </View>

     <View style={[styles.container, localStyles.container]}> 
      <Text style={[styles.title, localStyles.title, localStyles.welcome]}>Welcome</Text>

      {/* Buttons */}
      <View style={[styles.container, localStyles.buttonContainer]}>
        {/* Sign In Button */}
        <LinearGradient
          colors={['#003396', '#000C24']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.gradientButton, localStyles.gradientButton]}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Sign Up Button */}
        <LinearGradient
          colors={['#FFFFFF', '#FFFFFF']}
          style={[styles.gradientButton, localStyles.gradientButtonWhite]}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={[styles.buttonText, localStyles.buttonTextWhite]}>SIGN UP</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      </View>
    </View>
  );
};

// Define local styles specific to WelcomeScreen
const localStyles = StyleSheet.create({
  background:{
    justifyContent: 'space-between',
    paddingVertical: 40,
  },
  container: {
    marginTop: 70, // Place the container closer to "FitnessHub"
    alignItems: 'center', // Center the container content
  },
  title: {
    fontSize: 36, // Override size
    marginTop: 30,
  },
  welcome: {
    marginTop: 110,
  },
  buttonContainer: {
    marginTop: 180,
    marginVertical: 30, // Add spacing between buttons and title
  },
  gradientButton: {
    marginBottom: 15, // Space between buttons
  },
  gradientButtonWhite: {
    borderWidth: 1,
    borderColor: '#003396',
  },
  buttonTextWhite: {
    color: '#003396',
  },
});

export default WelcomeScreen;
