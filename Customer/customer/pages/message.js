import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Footer from '../components/footer';

const MessagePage = () => {
  const [activeTab, setActiveTab] = useState('Chats');

  const chatsData = [
    { id: '1', name: 'Limo Centre', message: 'Hi John Smith...', time: '40 mins ago' },
    { id: '2', name: 'Limo Centre', message: 'Your quote is ready.', time: '40 mins ago' },
    { id: '3', name: 'Limo Centre (2)', message: 'Can we confirm your booking?', time: '40 mins ago' },
    { id: '4', name: 'Limo Centre', message: 'Need further details?', time: '40 mins ago' },
  ];

  const callsData = [
    { id: '1', name: 'Limo Centre', status: '40 mins ago', type: 'missed' },
    { id: '2', name: 'Limo Centre', status: '40 mins ago', type: 'outgoing' },
    { id: '3', name: 'Limo Centre (2)', status: '40 mins ago', type: 'incoming' },
    { id: '4', name: 'Limo Centre', status: '40 mins ago', type: 'missed' },
  ];

  const renderChats = ({ item }) => (
    <View style={styles.chatItem}>
      <View style={styles.chatIcon}>
        <Ionicons name="person-circle-outline" size={40} color="#E0EFFF" />
      </View>
      <View style={styles.chatDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.chatMessage}>{item.message}</Text>
      </View>
      <Text style={styles.chatTime}>{item.time}</Text>
    </View>
  );

  const renderCalls = ({ item }) => (
    <View style={styles.callItem}>
      <View style={styles.chatIcon}>
        <Ionicons name="person-circle-outline" size={40} color="#E0EFFF" />
      </View>
      <View style={styles.callDetails}>
        <Text style={styles.chatName}>{item.name}</Text>
        <Text style={styles.callStatus}>{item.status}</Text>
      </View>
      <Ionicons
        name={item.type === 'missed' ? 'call-outline' : 'call'}
        size={24}
        color={item.type === 'missed' ? 'red' : '#4A90E2'}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Conversations</Text>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Chats' && styles.activeTab]}
          onPress={() => setActiveTab('Chats')}
        >
          <Text style={[styles.tabText, activeTab === 'Chats' && styles.activeTabText]}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Calls' && styles.activeTab]}
          onPress={() => setActiveTab('Calls')}
        >
          <Text style={[styles.tabText, activeTab === 'Calls' && styles.activeTabText]}>Calls</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <FlatList
        data={activeTab === 'Chats' ? chatsData : callsData}
        keyExtractor={(item) => item.id}
        renderItem={activeTab === 'Chats' ? renderChats : renderCalls}
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
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    color: '#A3B0CF',
    fontSize: 16,
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContent: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
  },
  chatIcon: {
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    color: '#A3B0CF',
    fontSize: 14,
  },
  chatTime: {
    color: '#A3B0CF',
    fontSize: 12,
  },
  callItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
  },
  callDetails: {
    flex: 1,
  },
  callStatus: {
    color: '#A3B0CF',
    fontSize: 14,
  },
});

export default MessagePage;
