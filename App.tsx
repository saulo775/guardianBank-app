import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Welcome } from './src/Components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Welcome title='hello world'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ee1d1d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
