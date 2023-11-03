/************************ 
  SearchScreen.js 
*************************/
import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, Alert } from "react-native";

import ToDoList from "../components/ToDoList";
import SearchBox from "../components/SearchBox";

import { useToDoContext } from "../contexts/ToDoContext";

export default function SearchScreen() {
  const { toDos, setToDos } = useToDoContext();
  const [filteredToDos, setFilteredToDos] = useState([...toDos]);

  const handleOnPressSearchButton = function (query) {
    setFilteredToDos((prevToDos) =>
      prevToDos.filter((item) => item.toDo.includes(query))
    );
    console.log("searching", query);
  };

  const handleOnPressRefreshButton = function () {
    setFilteredToDos([...toDos]);
  };

  useEffect(() => {
    console.log("filteredToDos", filteredToDos);
  }, [filteredToDos]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Under development</Text>
      <SearchBox
        handleOnPressSearchButton={handleOnPressSearchButton}
        handleOnPressRefreshButton={handleOnPressRefreshButton}
      />
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
