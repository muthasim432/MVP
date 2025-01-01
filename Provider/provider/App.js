import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Screens/HomePage";
import CalendarPage from "./Screens/CalendarPage";
import JobPage from "./Screens/JobPage";
import DisputePage from "./Screens/DisputePage";
import AccountsPage from "./Screens/AccountsPage";
import LogInPage from "./Authentication/LogInPage";
import SignUpPage from "./Authentication/SignUpPage";
import BusinessDetails from "./Authentication/BusinessDetails";
import PersonalDetails from "./Authentication/PersonalDetails";
import SignUpConfirmation from "./Authentication/SignUpConfirmation";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn" // Start with the LogIn page
        screenOptions={{
          headerShown: false, // Disable the default header for all screens
        }}
      >
        {/* Authentication Screens */}
        <Stack.Screen name="LogIn" component={LogInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
        <Stack.Screen name="SignUpConfirmation" component={SignUpConfirmation} />

        {/* Main App Screens */}
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Calendar" component={CalendarPage} />
        <Stack.Screen name="Jobs" component={JobPage} />
        <Stack.Screen name="Disputes" component={DisputePage} />
        <Stack.Screen name="Accounts" component={AccountsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
