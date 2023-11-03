/************************ 
  AddToDo.js 
*************************/
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import { useToDoContext } from "../contexts/ToDoContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

// input form
const AddToDo = function () {
  const [text, setText] = useState("");
  const { toDos, setToDos } = useToDoContext();

  // handle add button
  const onPress = function () {
    const createdDate = new Date();
    const newToDo = {
      toDo: text,
      createdDate: createdDate,
      key: createdDate.getTime(), // unix time[ms]
    };

    if (text.length > 3) {
      setToDos((prevToDos) => [...prevToDos, newToDo]);
      console.log("newToDo is added", newToDo);
      setText(""); // clear
    } else {
      Alert.alert("OOPS!", "todos must be over 3 characters long", [
        { text: "understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const onChangeText = function (newText) {
    setText(newText);
  };

  // Load data from AsyncStorage
  useEffect(() => {
    async function loadTodos() {
      try {
        const storedData = await AsyncStorage.getItem("todos");
        if (storedData !== null) {
          const todos = JSON.parse(storedData);
          setToDos(todos);
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      }
    }

    loadTodos();
  }, []);

  // Save data to AsyncStorage whenever 'toDos' changes
  useEffect(() => {
    async function saveTodos() {
      try {
        await AsyncStorage.setItem("todos", JSON.stringify(toDos));
      } catch (error) {
        console.error("Error saving data to AsyncStorage:", error);
      }
    }

    saveTodos();
  }, [toDos]);

  return (
    <View>
      <TextInput
        placeholder="input todo"
        value={text}
        onChangeText={onChangeText}
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={onPress}>
        {({ pressed }) => (
          <Text style={pressed ? styles.pressed : styles.button}>
            {pressed ? "ToDo added" : "Add ToDo"}
          </Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    padding: 3,
  },
  button: {
    backgroundColor: "gray",
    color: "white",
  },
  pressed: {
    backgroundColor: "blue",
    color: "white",
  },
});

export default AddToDo;
