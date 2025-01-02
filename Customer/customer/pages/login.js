import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forget password?</Text>
        </TouchableOpacity>

        <LinearGradient
          colors={['#003396', '#000C24']} // Gradient colors
          start={{ x: 0, y: 0 }} // Start gradient at top-left
          end={{ x: 1, y: 0 }} // End gradient at top-right
          style={styles.gradientButton} // Gradient styling
        >

        <TouchableOpacity 
            style={styles.button}  
            onPress={() => navigation.navigate('Home')} //direct to home page
          >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        </LinearGradient>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}  
            onPress={() => navigation.navigate('SignUp')}
            >Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
