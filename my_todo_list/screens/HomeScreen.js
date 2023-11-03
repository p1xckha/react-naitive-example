/************************ 
  HomeScreen.js 
*************************/
import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ToDoList from "../components/ToDoList";
import AddToDo from "../components/AddToDo";
import Header from "../components/Header";
import { ToDoProvider, useToDoContext } from "../contexts/ToDoContext";

export default function HomeScreen() {
  const { toDos, setToDos } = useToDoContext();
  const [filteredToDos, setFilteredToDos] = useState([]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ToDoList toDos={toDos} />
      <AddToDo />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "pink",
    padding: 8,
  },
});
