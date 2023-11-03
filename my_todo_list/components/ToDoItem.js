/************************ 
  ToDoItem.js 
*************************/
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import DeleteButton from "./DeleteButton";
import { useToDoContext } from "../contexts/ToDoContext";

/**
 * @typedef {Object} ToDoItemData
 * @property {string} toDo - The task description.
 * @property {Date} createdDate - The date object when the task was created.
 * @property {Date} finishedDate - The date object when the task was marked as finished (if applicable).
 * @property {number} key - unix time[ms] when the task is created
 * @property {boolean} done - Indicates whether the task is marked as done.
 */

const ToDoItem = function ({ item }) {
  const formattedDate = formatDateTime(item.createdDate);
  const { toDos, setToDos } = useToDoContext();

  const handleOnPressDeleteButton = (key) => {
    setToDos((prevToDos) => prevToDos.filter((todo) => todo.key != key));
    console.log("toDos", toDos);
    console.log(`Deleting toDo with key ${key}`);
  };

  return (
    <View style={styles.item}>
      <Text>{item.toDo}</Text>
      <View style={styles.date}>
        <Text style={styles.dateString}>Created: {formattedDate}</Text>
        <DeleteButton onPress={() => handleOnPressDeleteButton(item.key)} />
      </View>
    </View>
  );
};

function formatDateTime(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "flex-start",
    padding: 5,
    marginVertical: 5,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: "white",
  },
  date: {
    flexDirection: "row",
    justifyContent: "flex-start",
    fontSize: 10,
  },
  dateString: {
    color: "gray",
  },
});

export default ToDoItem;
