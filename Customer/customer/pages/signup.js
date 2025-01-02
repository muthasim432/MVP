import React from 'react';
import { View, Text, TextInput, TouchableOpacity,StyleSheet} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style.js';

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={[styles.title, signupStyles.title]}>Create Your Account</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#aaa"
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
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
          onPress={() => navigation.navigate('Login')} //dirct to the home page
        >
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
        </LinearGradient>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already Sign Up?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}
            onPress={() => navigation.navigate('Login')}
            > LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Define styles explicitly for signup page
const signupStyles = StyleSheet.create({
  title:{
    textAlign: 'left', // Align text to the left
    alignSelf: 'flex-start', // Ensure it aligns to the start of the container
    marginBottom: 40,
    marginTop: -30,
  }
});

export default SignUpScreen;
