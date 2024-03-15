import React, { useState } from "react";
import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import Display from "./components/display";

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Display />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C0C0C0",
  },
});

export default App;