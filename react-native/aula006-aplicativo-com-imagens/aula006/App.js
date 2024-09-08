import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import Congo from "./assets/images/floresta-congo.png";
import Taiga from "./assets/images/floresta-taiga.png";
import Amazonica from "./assets/images/floresta-amazonica.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Florestas Pelo Mundo</Text>
      <Image source={Congo} style={styles.img} />
      <Text style={styles.subtitulo}>Floresta do Congo (África)</Text>
      <Image source={Taiga} style={styles.img} />
      <Text style={styles.subtitulo}>Floresta (Hemisfério Norte)</Text>
      <Image source={Amazonica} style={styles.img} />
      <Text style={styles.subtitulo}>Floresta Amazônica (América do Sul)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 22,
    marginBottom: 30,
  },

  subtitulo: {
    marginBottom: 20,
  },

  img: {
    width: 300,
    height: 100,
  },
});
