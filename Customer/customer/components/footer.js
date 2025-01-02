import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={stylesF.footer}>
      {/* Home Button */}
      <TouchableOpacity
        style={stylesF.footerButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Ionicons name="home-outline" size={24} color="#FFF" />
        <Text style={stylesF.footerText}>Home</Text>
      </TouchableOpacity>

      {/* Matches Button */}
      <TouchableOpacity
        style={stylesF.footerButton}
        onPress={() => navigation.navigate('Matches')}
      >
        <Ionicons name="calendar-outline" size={24} color="#FFF" />
        <Text style={stylesF.footerText}>Matches</Text>
      </TouchableOpacity>

      {/* Disputes Button */}
      <TouchableOpacity
        style={stylesF.footerButton}
        onPress={() => navigation.navigate('Disputes')}
      >
        <Ionicons name="alert-circle-outline" size={24} color="#FFF" />
        <Text style={stylesF.footerText}>Disputes</Text>
      </TouchableOpacity>

      {/* Accounts Button */}
      <TouchableOpacity
        style={stylesF.footerButton}
        onPress={() => navigation.navigate('Accounts')}
      >
        <Ionicons name="person-outline" size={24} color="#FFF" />
        <Text style={stylesF.footerText}>Accounts</Text>
      </TouchableOpacity>
    </View>
  );
};

const stylesF = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1E2A52',
    paddingVertical: 15,
    height: 70,
    borderTopWidth: 1,
    borderTopColor: '#444',
  },
  footerButton: {
    alignItems: 'center',
    flex: 1,
  },
  footerText: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default Footer;
