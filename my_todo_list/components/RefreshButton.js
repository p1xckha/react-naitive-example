/************************ 
  RefreshButton.js 
*************************/
import { Pressable, Text, StyleSheet } from "react-native";

const RefreshButton = function ({ onPress, text }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    color: "white",
  },
});

export default RefreshButton;
