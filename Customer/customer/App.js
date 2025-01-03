import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './pages/welcome'; // Import Welcome Screen
import LoginScreen from './pages/login.js'; // Import Login Screen
import SignUpScreen from './pages/signup.js'; // Import Sign Up Screen
import HomePage from './pages/home.js'; // Import Home Page Screen
import RequestMatchedPage from './pages/matches.js'; // Import Matches Page
import DisputesPage from './pages/disputes.js'; // Import Disputes Page
import AccountsPage from './pages/accounts.js'; // Import Accounts Page
import ChatPage from './pages/chatDispute.js'; // Import Chat Page
import NotificationPage from './pages/notification.js'; // Import Notification Page
import MessagePage from './pages/message.js'; // Import Message Page

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator initialRouteName="Welcome">
        {/* Welcome Screen */}
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Sign Up Screen */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />

        {/* Home Page */}
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />

        {/* Matches Page */}
        <Stack.Screen
          name="Matches"
          component={RequestMatchedPage}
          options={{ headerShown: false }}
        />

        {/* Disputes Page */}
        <Stack.Screen
          name="Disputes"
          component={DisputesPage}
          options={{ headerShown: false }}
        />

        {/* Accounts Page */}
        <Stack.Screen
          name="Accounts"
          component={AccountsPage}
          options={{ headerShown: false }}
        />

        {/* Chat Page */}
        <Stack.Screen
          name="ChatPage"
          component={ChatPage}
          options={{
            headerShown: false,
          }}
        />

        {/* Notification Page */}
        <Stack.Screen
          name="Notifications"
          component={NotificationPage}
          options={{
            headerShown: false,
          }}
        />

        {/* Message Page */}
        <Stack.Screen
          name="MessagePage"
          component={MessagePage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
