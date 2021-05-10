import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  flexDirection: "column";
  return (
    <View style={styles.container}>
      <View style={{flex: 1, backgroundColor: "green"}}></View>
      <View style={{flex: 2, backgroundColor: "red"}}></View>
      <View style={{flex: 3, backgroundColor: "blue"}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
