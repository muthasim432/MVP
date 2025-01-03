import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ChatPage = () => {
  const navigation = useNavigation(); // Hook for navigation

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Hi! I'm John Smith, your virtual assistant. How can I help you today?",
      sender: 'assistant',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text: input, sender: 'user' },
      ]);
      setInput('');
    }
  };

  return (
    <View style={styles.container}>
      {/* Chat Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()} // Navigate back on press
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Dispute Box</Text>
          <Text style={styles.paragraphText}>
            Provide the issue you faced or are facing and we’ll look into it
          </Text>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.sender === 'user' ? styles.userMessage : styles.assistantMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        style={styles.messagesList}
      />

      {/* Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          placeholderTextColor="#A3B0CF"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
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
    padding: 15,
    backgroundColor: '#003396',
  },
  backButton: {
    marginRight: 10,
  },
  headerContent: {
    flex: 1,
  },
  headerText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
  },
  paragraphText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 15, // Adds spacing below the title
    textAlign: 'center', // Keeps the alignment consistent
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#4A90E2',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0EFFF',
  },
  messageText: {
    color: '#001B51',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#003396',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#E0EFFF',
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
    color: '#001B51',
  },
  sendButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
  },
});

export default ChatPage;
