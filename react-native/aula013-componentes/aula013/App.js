import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Topo from "./components/Topo/index.js";
import Conteudo from "./components/Conteudo/index.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Topo />
      <Conteudo />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
