import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import Footer from '../components/footer';

const NotificationPage = () => {
  const navigation = useNavigation(); // Hook for navigation

  const notifications = [
    {
      id: '1',
      section: 'New',
      data: [
        { id: 'n1', text: 'Limo Centre just sent you a quote.', time: '40m' },
        { id: 'n2', text: 'Limo Centre sent you a message.', time: '40m' },
        { id: 'n3', text: 'Limo Centre just sent you a quote.', time: '40m' },
        { id: 'n4', text: 'Limo Centre just sent you a quote.', time: '40m' },
      ],
    },
    {
      id: '2',
      section: 'Last Week',
      data: [
        { id: 'n5', text: 'Limo Centre matched your request.', time: '1w' },
        { id: 'n6', text: 'Limo Centre liked your profile.', time: '1w' },
        { id: 'n7', text: 'Limo Centre liked your profile.', time: '1w' },
      ],
    },
  ];

  const renderSection = ({ item }) => (
    <View>
      <Text style={styles.sectionHeader}>{item.section}</Text>
      {item.data.map((notification) => (
        <View key={notification.id} style={styles.notificationItem}>
          <View style={styles.iconContainer}>
            <Ionicons name="notifications-outline" size={20} color="#003396" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.notificationText}>{notification.text}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notifications</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Notifications List */}
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderSection}
        contentContainerStyle={styles.listContent}
      />

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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#003396',
    marginTop: 30,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  sectionHeader: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0EFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  notificationTime: {
    color: '#A3B0CF',
    fontSize: 12,
  },
});

export default NotificationPage;
