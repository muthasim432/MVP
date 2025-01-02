import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import styles from './style';
import Footer from '../components/footer';
import Header from '../components/header';

const HomePage = () => {
  const [showWarning, setShowWarning] = useState(true);
  const historyData = [
    {
      id: '1',
      cost: '$0.00',
      company: 'Limocentre',
      service: 'Limousine Service',
      details: 'Service Details: ......',
    },
    {
      id: '2',
      cost: '$15.00',
      company: 'WebCentre',
      service: 'Website Design',
      details: 'Service Details: Full Website Creation',
    },
    {
      id: '3',
      cost: '$25.00',
      company: 'Cleaners Co.',
      service: 'Cleaning Service',
      details: 'Service Details: House Cleaning',
    },
  ];

  return (
    <View style={stylesHome.container}>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <ScrollView style={styles.backgroundHome}>

        {/* Warning Section */}
        {showWarning && (
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              Do Not share your card details with the service provider. This is
              for your own safety.
            </Text>
            <TouchableOpacity onPress={() => setShowWarning(false)}>
              <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>→</Text>
          </TouchableOpacity>
        </View>

        {/* Services Section */}
        <Text style={styles.sectionTitle}>Services</Text>
        <View style={styles.servicesContainer}>
          {[
            'Limousine Services',
            'Cleaning Services',
            'Website Design Services',
            'Other Services',
          ].map((service, index) => (
            <View key={index} style={styles.serviceCard}>
              <Image
                source={require('../assets/favicon.png')}
                style={styles.serviceIcon}
              />
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>

        {/* History Section */}
        <View style={styles.historyHeader}>
          <Text style={styles.sectionTitle}>History</Text>
          <TouchableOpacity>
            <Text style={stylesHome.seeAllText}>SEE ALL</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.historyScrollContainer}
        >
          {historyData.map((item) => (
            <View key={item.id} style={styles.historyCard}>
              <View style={styles.historyCircle} />
              <View>
                <Text style={styles.historyText}>Cost: {item.cost}</Text>
                <Text style={styles.historyText}>
                  Company Name: {item.company}
                </Text>
                <Text style={styles.historyText}>Service: {item.service}</Text>
                <Text style={styles.historyText}>{item.details}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
};

const stylesHome = StyleSheet.create({
  container: {
    flex: 1, // Ensures the footer is pushed to the bottom
    backgroundColor: '#fff', // Background color
  },
  logo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  seeAllText: {
    color: '#4A90E2',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10,
  },
});

export default HomePage;
