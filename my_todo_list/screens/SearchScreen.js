/************************ 
  SearchScreen.js 
*************************/
import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ToDoList from "../components/ToDoList";
import AddToDo from "../components/AddToDo";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";

import { ToDoProvider, useToDoContext } from "../contexts/ToDoContext";

export default function SearchScreen() {
  const { toDos, setToDos } = useToDoContext();
  const [filteredToDos, setFilteredToDos] = useState([...toDos]);

  const handleOnPressSearchButton = function (query) {
    setFilteredToDos((prevToDos) =>
      prevToDos.filter((item) => item.toDo.includes(query))
    );
    console.log("searching", query);
  };

  useEffect(() => {
    console.log("filteredToDos", filteredToDos);
  }, [filteredToDos]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Under development</Text>
      <SearchBox handleOnPressSearchButton={handleOnPressSearchButton} />
      <ToDoList toDos={filteredToDos} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "pink",
    padding: 8,
  },
});
