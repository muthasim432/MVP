import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import Footer from '../components/footer';
import Header from '../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons';

const RequestMatchedPage = () => {
  const [activeTab, setActiveTab] = useState('Recent'); // Tracks the active tab
  const requestData = [
    {
      id: '1',
      company: 'Limo Centre',
      service: 'Limousine Service',
      likes: '....',
      details: 'Service Details: ......',
    },
    {
      id: '2',
      company: 'Limo Centre',
      service: 'Limousine Service',
      likes: '....',
      details: 'Service Details: ......',
    },
  ];

  const renderTabContent = () => {
    return (
      <FlatList
        data={requestData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={stylesM.card}>
            <View style={stylesM.cardContent}>
              <View style={stylesM.cardImagePlaceholder} />
              <View>
                <Text style={stylesM.cardText}>{item.company}</Text>
                <Text style={stylesM.cardText}>Service: {item.service}</Text>
                <Text style={stylesM.cardText}>Likes: {item.likes}</Text>
                <Text style={stylesM.cardText}>{item.details}</Text>
              </View>
            </View>
            <View style={stylesM.buttonRow}>
              <TouchableOpacity style={stylesM.messageButton}>
                <Text style={stylesM.messageButtonText}>
                  Message - Request Quote
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={stylesM.callButton}>
                <Ionicons name="call-outline" size={20} color="#003396" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={stylesM.list}
      />
    );
  };

  return (
    <View style={[stylesM.background]}>
      {/* Header */}
      <Header />

      {/* Title */}
      <Text style={stylesM.title}>Request Matched</Text>

      {/* Tabs */}
      <View style={stylesM.tabs}>
        {['All', 'Recent', 'Previous'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[stylesM.tab, activeTab === tab ? stylesM.activeTab : null]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                stylesM.tabText,
                activeTab === tab ? stylesM.activeTabText : null,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content */}
      <View style={{ flex: 1 }}>{renderTabContent()}</View>

      {/* Re-request Button */}
      {activeTab === 'Recent' && (
        <TouchableOpacity style={stylesM.reRequestButton}>
          <Text style={stylesM.reRequestButtonText}>Re-request</Text>
        </TouchableOpacity>
      )}

      {/* Footer */}
      <Footer />
    </View>
  );
};

const stylesM = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#001B51',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#4A90E2',
  },
  tab: {
    paddingVertical: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    fontSize: 14,
    color: '#A3B0CF',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    paddingHorizontal: 15,
  },
  card: {
    backgroundColor: '#E0EFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  cardContent: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cardImagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#A5C9FF',
    marginRight: 10,
  },
  cardText: {
    color: '#001B51',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  messageButton: {
    backgroundColor: '#003396',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginLeft: 50,

  },
  messageButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  callButton: {
    backgroundColor: '#E0EFFF',
    borderRadius: 25,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#003396',
  },
  reRequestButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 10,
  },
  reRequestButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default RequestMatchedPage;
