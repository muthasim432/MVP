import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DisputePage = () => {
  const navigation = useNavigation();

  const stats = [
    { label: 'Complaint Box', count: 3 },
    { label: 'Resolved', count: 5 },
    { label: 'Unresolved', count: 7 },
  ];

  const disputeData = [
    { id: '1', title: 'Poor Service by Company' },
    { id: '2', title: 'Delay in Service' },
    { id: '3', title: 'Overcharging Issue' },
    { id: '4', title: 'Incorrect Information' },
    { id: '5', title: 'Poor Service by Company' },
  ];

  const renderStatBoxes = () => (
    <View style={styles.statContainer}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statBox}>
          <Text style={styles.statLabel}>{stat.label}</Text>
          <Text style={styles.statCount}>{stat.count}</Text>
        </View>
      ))}
    </View>
  );

  const renderDisputeList = () => (
    <FlatList
      data={disputeData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.disputeCard}>
          <Text style={styles.disputeText}>{item.id}</Text>
          <Text style={[styles.disputeText, { flex: 5 }]}>{item.title}</Text>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewButtonText}>View</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />

      {/* Title and Add Button */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Dispute Box</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('ChatPage')}
        >
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Statistic Boxes */}
      {renderStatBoxes()}

      {/* Dispute List */}
      <View style={styles.content}>{renderDisputeList()}</View>

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
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    padding: 10,
    borderRadius: 50,
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    marginBottom: 20,
    marginTop: 10,
  },
  statBox: {
    backgroundColor: '#003396',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 100,
    height: 80,
    justifyContent: 'center',
  },
  statLabel: {
    color: '#A3B0CF',
    fontSize: 12,
    textAlign: 'center',
  },
  statCount: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
  },
  disputeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0EFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  disputeText: {
    color: '#001B51',
    fontSize: 14,
    flex: 1,
  },
  viewButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default DisputePage;
