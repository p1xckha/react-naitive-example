/************************ 
  App.js 
*************************/
import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ToDoProvider } from "./contexts/ToDoContext";

import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  return (
    <ToDoProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ToDoProvider>
  );
}
