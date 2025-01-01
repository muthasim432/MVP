import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./Screens/HomePage";
import CalendarPage from "./Screens/CalendarPage"; // New CalendarPage component
import JobPage from "./Screens/JobPage"; // Import JobPage
import DisputePage from "./Screens/DisputePage"; // Import DisputePage
import AccountsPage from "./Screens/AccountsPage"; // Import Accounts page



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Disable the default header for all screens
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Calendar" component={CalendarPage} />
        <Stack.Screen name="Jobs" component={JobPage} />
        <Stack.Screen name="Disputes" component={DisputePage} />
        <Stack.Screen name="Accounts" component={AccountsPage} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}
