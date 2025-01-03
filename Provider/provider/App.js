import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Screens/HomePage";
import CalendarPage from "./Screens/CalendarPage";
import JobPage from "./Screens/JobPage";
import DisputePage from "./Screens/DisputePage";
import AccountsPage from "./Screens/AccountsPage";
import SignupPage from "./Authentication/SignUpPage";
import LoginPage from "./Authentication/LoginPage";
import ConfirmSignupPage from "./Authentication/ConfirmSignUpPage"

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginPage" // Start with the LogIn page
        screenOptions={{
          headerShown: false, // Disable the default header for all screens
        }}
      >
  
        {/* Main App Screens */}
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Calendar" component={CalendarPage} />
        <Stack.Screen name="Jobs" component={JobPage} />
        <Stack.Screen name="Disputes" component={DisputePage} />
        <Stack.Screen name="Accounts" component={AccountsPage} />
        <Stack.Screen name="SignupPage" component={SignupPage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
        <Stack.Screen name="ConfirmSignupPage" component={ConfirmSignupPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
