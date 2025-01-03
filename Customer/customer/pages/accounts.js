import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Footer from '../components/footer';

const AccountsPage = () => {
  const navigation = useNavigation(); // Hook for navigation

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>John Smith</Text>
        <Ionicons name="person-circle-outline" size={36} color="#fff" />
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContainer}>
        {/* Status Boxes */}
        <View style={styles.statusContainer}>
          <View style={styles.statusBox}>
            <Text style={styles.statusLabel}>Likes</Text>
            <Text style={styles.statusCount}>3</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.statusLabel}>Service Count</Text>
            <Text style={styles.statusCount}>3</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.statusLabel}>Issues Faced</Text>
            <Text style={styles.statusCount}>3</Text>
          </View>
        </View>
        <Text style={styles.manageText}>
          Manage your connected experience and account settings within the app.
        </Text>

        {/* Quick Action Buttons */}
        <View style={styles.quickActionsContainer}>
          <TouchableOpacity style={styles.quickActionBox}>
            <Ionicons name="help-circle-outline" size={30} color="#fff" />
            <Text style={styles.quickActionText}>Help Center</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionBox}>
            <Ionicons name="card-outline" size={30} color="#fff" />
            <Text style={styles.quickActionText}>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickActionBox}>
            <Ionicons name="time-outline" size={30} color="#fff" />
            <Text style={styles.quickActionText}>History</Text>
          </TouchableOpacity>
        </View>

        {/* Promo and Important Info Boxes */}
        <TouchableOpacity style={styles.infoBox}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Try Limousine Services</Text>
            <Text style={styles.infoDescription}>
              Explore the city in a Limousine. Limited time only. See more.
            </Text>
          </View>
          <Ionicons name="car-outline" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoBox}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Privacy Settings</Text>
            <Text style={styles.infoDescription}>
              Have a check on the privacy settings update.
            </Text>
          </View>
          <Ionicons name="shield-checkmark-outline" size={30} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoBox}>
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTitle}>Do Not Share Your Card Details</Text>
            <Text style={styles.infoDescription}>
              For your own safety, never share your card details with any service provider. Learn more.
            </Text>
          </View>
          <Ionicons name="lock-closed-outline" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Settings Menu */}
        <Text style={styles.sectionHeader}>Account Settings</Text>
        {[
          { name: 'Settings', icon: 'settings-outline' },
          { name: 'Messages', icon: 'chatbubbles-outline' },
          { name: 'Manage Account', icon: 'person-outline' },
          { name: 'Saved Services', icon: 'bookmark-outline' },
          { name: 'Notification', icon: 'notifications-outline' },
          { name: 'Service Promotions', icon: 'pricetag-outline' },
          { name: 'Set up your business profile', icon: 'business-outline' },
          { name: 'Legal', icon: 'document-text-outline' },
          { name: 'Privacy', icon: 'shield-outline' },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Ionicons name={item.icon} size={20} color="#fff" />
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Login')} // Navigate to Login on press
        >
          <Ionicons name="log-out-outline" size={20} color="#fff" />
          <Text style={styles.menuText}>Log out</Text>
        </TouchableOpacity>
      </ScrollView>

        
    {/* Footer */}
      <Footer />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001B51',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 50,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statusBox: {
    alignItems: 'center',
    backgroundColor: '#003396',
    padding: 15,
    borderRadius: 10,
  },
  statusLabel: {
    color: '#A3B0CF',
    fontSize: 12,
  },
  statusCount: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  manageText: {
    color: '#A3B0CF',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  quickActionBox: {
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 10,
    width: 90,
  },
  quickActionText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
  infoBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#003396',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoDescription: {
    color: '#A3B0CF',
    fontSize: 12,
    marginTop: 5,
  },
  sectionHeader: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
  },
  menuText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AccountsPage;
