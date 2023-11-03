/************************ 
  App.js 
*************************/
import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, Alert } from "react-native";

import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";
import Header from "./components/Header";
import { ToDoProvider, useToDoContext } from "./contexts/ToDoContext";

export default function App() {
  const [filteredToDos, setFilteredToDos] = useState([]);

  return (
    <ToDoProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <ToDoList />
        <AddToDo />
      </SafeAreaView>
    </ToDoProvider>
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
