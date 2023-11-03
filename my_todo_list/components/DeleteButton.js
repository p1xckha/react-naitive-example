/************************ 
  DeleteButton.js 
*************************/
import { Pressable, Text, StyleSheet } from "react-native";

const DeleteButton = function ({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>Del</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    color: "white",
  },
});

export default DeleteButton;
