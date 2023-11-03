/************************ 
  Header.js 
*************************/
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = function () {
  return (
    <View>
      <Text style={styles.header}>ToDoList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    backgroundColor: "orange",
  },
});

export default Header;
