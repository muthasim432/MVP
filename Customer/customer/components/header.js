import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the icons
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import styles from '../pages/style';

const Header = () => {
  const navigation = useNavigation(); // Initialize navigation hook

  return (
    <View style={styles.header}>
      <Text style={styleHeader.logo}>Company</Text>
      <View style={styles.headerIcons}>
        {/* Notification Icon */}
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('Notifications')} // Navigate to NotificationPage
        >
          <Ionicons name="notifications-outline" size={24} color="#A3B0CF" />
        </TouchableOpacity>

        {/* Chat Icon */}
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate('MessagePage')} // Navigate to MessagePage
        >
          <Ionicons name="chatbox-outline" size={24} color="#A3B0CF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styleHeader = StyleSheet.create({
  logo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Header;
