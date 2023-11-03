import React, {useState} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';

// input form
const SearchToDo = function ({submitHandler} = ()=>null ) {
  const [text, setText] = useState("")

  const onChangeText = function(text){
    setText(text)
  }

  return (
    <View>
      <TextInput placeholder="input todo" onChangeText={onChangeText} style={styles.input} />
      <Pressable style={styles.button} onPress={() => submitHandler(text)}>
      {({pressed}) => (
        <Text style={pressed? styles.pressed: styles.button} >
        {pressed? "ToDo added" : "Add ToDo"}
      </Text>
      )} 
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
    padding: 3,

  },
  button: {
   backgroundColor: 'gray',
   color:'white'
  },
  pressed: {
    backgroundColor: 'blue',
    color:'white'
  },
})

export default SearchToDo;
