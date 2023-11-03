/***********************
    SearchBox.js
*********************/
import React, { useState } from "react";
import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";

const SearchBox = function ({ handleOnPressSearchButton }) {
  const [query, setQuery] = useState("");

  const onChangeText = (newText) => setQuery(newText);
  const onPress = function () {
    handleOnPressSearchButton(query);
  };
  return (
    <View style={styles.searchBox}>
      <TextInput
        value={query}
        onChangeText={onChangeText}
        style={styles.textInput}
      />
      <Pressable onPress={onPress} style={styles.searchButton}>
        <Text>Search</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBox: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "white",
  },
  searchButton: {
    backgroundColor: "gray",
    color: "white",
  },
});

export default SearchBox;
