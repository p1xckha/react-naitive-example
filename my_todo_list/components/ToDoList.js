/************************ 
  ToDoList.js 
*************************/

import React from "react";
import { Text, FlatList } from "react-native";
import ToDoItem from "./ToDoItem";
import { useToDoContext } from "../contexts/ToDoContext";

// https://reactnative.dev/docs/flatlist

const ToDoList = function ({ toDos }) {
  const renderItem = function ({ item }) {
    return <ToDoItem item={item} />;
  };

  return <FlatList data={toDos} renderItem={renderItem} />;
};

export default ToDoList;
