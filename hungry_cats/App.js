import React, { useState, useEffect } from 'react';
import { Button, Text, View, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CatProps = {
  name: string,
  age: number,
  isHungry: boolean,
  color: string
};

const hungryInterval = 3000;

const Cat = (props: CatProps) => {
  const [isHungry, setIsHungry] = useState(props.isHungry);

  useEffect(() => {
    const shortTimer = setTimeout(() => setIsHungry(true), hungryInterval);
    return () => {
      clearTimeout(shortTimer);
    };
  });

  const OnPress = () => {
    setIsHungry(false);
  };

  return (
    <View style={styles.cat}>
    <Icon name="cat" size={30} color={props.color} />
      <Text>
        {props.name} is {isHungry ? 'Hungry' : 'full'}.
      </Text>
      <Button
        title={isHungry ? 'give me your lunch' : 'Thank you'}
        onPress={OnPress}
        disabled={!isHungry}
      />
    </View>
  );
};

const Header = () => {
  return <Text style={styles.header}>Hungry Cats</Text>;
};

const catArray = [
  { name: 'Sam', age: 3, isHungry: true, color: 'yellow' },
  { name: 'Mike', age: 4, isHungry: true, color: 'blue' },
  { name: 'John', age: 5, isHungry: true, color: 'red' },
  { name: 'Luna', age: 2, isHungry: true, color: 'green' },
  { name: 'Buddy', age: 1, isHungry: true, color: 'pink' },
  { name: 'Whiskers', age: 6, isHungry: true, color: 'purple' },
  { name: 'Fluffy', age: 2, isHungry: true, color: 'orange' },
  { name: 'Oreo', age: 3, isHungry: true, color: 'brown' },
  { name: 'Tiger', age: 7, isHungry: true, color: 'gray' },
  { name: 'Snowball', age: 4, isHungry: true, color: 'white' },
];


export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>hungryInterval={hungryInterval}ms</Text>
      <FlatList
        data={catArray}
        renderItem={({ item }) => (
          <Cat name={item.name} age={item.age} isHungry={item.isHungry} color={item.color} />
        )}
      />
    </View>
  );
}

// https://reactnative.dev/docs/flexbox
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
  },
  cat: {
    flex: 1,
    padding: 5,
  },
});
