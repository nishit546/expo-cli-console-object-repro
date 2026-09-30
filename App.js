import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const student = {
    name: "Nishit",
    age: 19,
    course: "React-Native",
  };

  console.log(student);

  return (
    <View style={styles.container}>
      <Text>Check the console for the logged object.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
