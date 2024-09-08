import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Capa from "./assets/images/capa.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Guerra do Amanhã</Text>
      <Text style={styles.paragrafo}>Gêneros: Ação e Ficção</Text>
      <Image source={Capa} style={styles.img} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BFE2F9",
    alignItems: "center",
    justifyContent: "center",
  },

  titulo: {
    fontSize: 22,
  },

  paragrafo: {
    marginBottom: 20,
  },

  img: {
    width: 300,
    height: 300,
  },
});
